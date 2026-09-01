"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminLayout from "@/components/shared/AdminLayout";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backend_url } from "@/newLayout";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";

const AddProjectPage: React.FC = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    figmaLink: "",
    websiteLink: "",
    githubLink: "",
    category: [] as string[], 
    industry: [] as string[],
    projectScreenshot: null as File | null,
    screenshotUrl: "",
  });
  

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projectId) {
      // Fetch project data if projectId is provided
      const fetchProjectData = async () => {
        try {
          const res = await axios.get(
            `${backend_url}/api/v1/project/get/${projectId}`
          );
          

          if (res.data.success) {
            setFormData({
              ...res.data.project,
              screenshotUrl: res.data.project.projectScreenshot || "", 
            });
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to load project data");
        }
      };
      fetchProjectData();
    }
  }, [projectId]);



 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData,  
      [name]: value, 
    }));
  };
  
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,  
        projectScreenshot: files[0],  
        screenshotUrl: URL.createObjectURL(files[0]),  
      }));
    }
  };

  
  const handleCategoryChange = (category: string) => {
    setFormData((prevData) => ({
      ...prevData,
      category: prevData.category.includes(category)
        ? prevData.category.filter((item) => item !== category)
        : [...prevData.category, category],
    }));
  };
  

  const handleIndustryChange = (industry: string) => {
    setFormData((prevData) => ({
      ...prevData,
      industry: prevData.industry.includes(industry)
        ? prevData.industry.filter((item:any) => item !== industry)
        : [...prevData.industry, industry],
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append("title", formData.title);
    formPayload.append("description", formData.description);
    formPayload.append("figmaLink", formData.figmaLink);
    formPayload.append("websiteLink", formData.websiteLink);
    formPayload.append("githubLink", formData.githubLink);

     // Add multiple Industries to the payload
    if (Array.isArray(formData.industry)) {
      formData.industry.forEach((industry) => {
        formPayload.append("industry[]", industry);
      });
    }

     // Add multiple categories to the payload
  if (Array.isArray(formData.category)) {
    formData.category.forEach((category) => {
      formPayload.append("category[]", category);
    });
  }

    if (formData.projectScreenshot) {
      formPayload.append("projectScreenshot", formData.projectScreenshot);
    }

    try {
      let res;
      if (projectId) {
        // Update existing project
        res = await axios.put(
          `${backend_url}/api/v1/project/update/${projectId}`,
          formPayload,
          { withCredentials: true }
        );
      } else {
        // Create a new project
        res = await axios.post(
          `${backend_url}/api/v1/project/create`,
          formPayload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => router.push("/admin/all-projects"), 2000); 
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Handle Cancel Button
  const handleCancel = () => {
    router.push("/admin/all-projects"); 
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="max-w-3xl mx-auto p-4 mt-20">
          <h1 className="text-2xl text-center font-bold mb-6">
            {projectId ? "Update Project" : "Add New Project"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Description Field */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>



{/* Industry Field */}

<div>
  <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
    Industry
  </label>
  <div className="mt-2 space-y-2">
    {/* Healthcare Industry */}
    <div onClick={() => handleIndustryChange("healthcare")} className="flex items-center cursor-pointer">
      {formData.industry.includes("healthcare") ? (
        <FaCheckCircle className="text-blue-500 mr-2" />
      ) : (
        <FaRegCircle className="text-gray-500 mr-2" />
      )}
      <label htmlFor="healthcare" className="text-sm text-gray-700">HealthCare</label>
    </div>

    {/* E-Commerce Industry */}
    <div onClick={() => handleIndustryChange("e-commerce")} className="flex items-center cursor-pointer">
      {formData.industry.includes("e-commerce") ? (
        <FaCheckCircle className="text-blue-500 mr-2" />
      ) : (
        <FaRegCircle className="text-gray-500 mr-2" />
      )}
      <label htmlFor="e-commerce" className="text-sm text-gray-700">E-Commerce</label>
    </div>

    {/* Hospitality Industry */}
    <div onClick={() => handleIndustryChange("hospitality")} className="flex items-center cursor-pointer">
      {formData.industry.includes("hospitality") ? (
        <FaCheckCircle className="text-blue-500 mr-2" />
      ) : (
        <FaRegCircle className="text-gray-500 mr-2" />
      )}
      <label htmlFor="hospitality" className="text-sm text-gray-700">Hospitality</label>
    </div>

    {/* Real Estate Industry */}
    <div onClick={() => handleIndustryChange("real-estate")} className="flex items-center cursor-pointer">
      {formData.industry.includes("real-estate") ? (
        <FaCheckCircle className="text-blue-500 mr-2" />
      ) : (
        <FaRegCircle className="text-gray-500 mr-2" />
      )}
      <label htmlFor="real-estate" className="text-sm text-gray-700">Real Estate</label>
    </div>

    {/* Restaurants Industry */}
    <div onClick={() => handleIndustryChange("restaurants")} className="flex items-center cursor-pointer">
      {formData.industry.includes("restaurants") ? (
        <FaCheckCircle className="text-blue-500 mr-2" />
      ) : (
        <FaRegCircle className="text-gray-500 mr-2" />
      )}
      <label htmlFor="restaurants" className="text-sm text-gray-700">Restaurants</label>
    </div>

    {/* Green Energy Industry */}
    <div onClick={() => handleIndustryChange("green-energy")} className="flex items-center cursor-pointer">
      {formData.industry.includes("green-energy") ? (
        <FaCheckCircle className="text-blue-500 mr-2" />
      ) : (
        <FaRegCircle className="text-gray-500 mr-2" />
      )}
      <label htmlFor="green-energy" className="text-sm text-gray-700">Green Energy</label>
    </div>
  </div>
</div>



{/* Category Field */}
<div>
  <label className="block text-sm font-medium text-gray-700">Category</label>
  <div className="mt-2 space-y-2">
    {/* Web Development Icon */}
    <div>
      <button
        type="button"
        id="web-development"
        value="web-development"
        onClick={() => handleCategoryChange("web-development")}
        className="mr-2"
      >
        {formData.category.includes("web-development") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="web-development" className="text-sm text-gray-700">Web Development</label>
    </div>

    {/* App Development Icon */}
    <div>
      <button
        type="button"
        id="mobile-app-development-company"
        value="mobile-app-development-company"
        onClick={() => handleCategoryChange("mobile-app-development-company")}
        className="mr-2"
      >
        {formData.category.includes("mobile-app-development-company") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="mobile-app-development-company" className="text-sm text-gray-700">App Development</label>
    </div>

    {/* UI & UX Design Icon */}
    <div>
      <button
        type="button"
        id="ui-ux-design-agency"
        value="ui-ux-design-agency"
        onClick={() => handleCategoryChange("ui-ux-design-agency")}
        className="mr-2"
      >
        {formData.category.includes("ui-ux-design-agency") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="ui-ux-design-agency" className="text-sm text-gray-700">UI & UX Design</label>
    </div>

    {/* DevOps Icon */}
    <div>
      <button
        type="button"
        id="devops"
        value="devops"
        onClick={() => handleCategoryChange("devops")}
        className="mr-2"
      >
        {formData.category.includes("devops") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="devops" className="text-sm text-gray-700">DevOps</label>
    </div>

    {/* Graphic Designing Icon */}
    <div>
      <button
        type="button"
        id="affordable-graphic-design-services"
        value="affordable-graphic-design-services"
        onClick={() => handleCategoryChange("affordable-graphic-design-services")}
        className="mr-2"
      >
        {formData.category.includes("affordable-graphic-design-services") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="affordable-graphic-design-services" className="text-sm text-gray-700">Graphic Designing</label>
    </div>

    {/* Project Management Icon */}
    <div>
      <button
        type="button"
        id="project-management"
        value="project-management"
        onClick={() => handleCategoryChange("project-management")}
        className="mr-2"
      >
        {formData.category.includes("project-management") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="project-management" className="text-sm text-gray-700">Project Management</label>
    </div>

    {/* SEO & Content Writing Icon */}
    <div>
      <button
        type="button"
        id="seo-services-for-small-business"
        value="seo-services-for-small-business"
        onClick={() => handleCategoryChange("seo-services-for-small-business")}
        className="mr-2"
      >
        {formData.category.includes("seo-services-for-small-business") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="seo-services-for-small-business" className="text-sm text-gray-700">SEO & Content Writing</label>
    </div>

    {/* Software Maintenance Icon */}
    <div>
      <button
        type="button"
        id="software-maintenance-services"
        value="software-maintenance-services"
        onClick={() => handleCategoryChange("software-maintenance-services")}
        className="mr-2"
      >
        {formData.category.includes("software-maintenance-services") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="software-maintenance-services" className="text-sm text-gray-700">Software Maintenance</label>
    </div>

    {/* QA Testing Icon */}
    <div>
      <button
        type="button"
        id="web-qa-tester"
        value="web-qa-tester"
        onClick={() => handleCategoryChange("web-qa-tester")}
        className="mr-2"
      >
        {formData.category.includes("web-qa-tester") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="web-qa-tester" className="text-sm text-gray-700">QA Testing</label>
    </div>

    {/* Social Media Marketing Icon */}
    <div>
      <button
        type="button"
        id="digital-marketing-for-software-companies"
        value="digital-marketing-for-software-companies"
        onClick={() => handleCategoryChange("digital-marketing-for-software-companies")}
        className="mr-2"
      >
        {formData.category.includes("digital-marketing-for-software-companies") ? (
          <FaCheckCircle className="text-blue-500" />
        ) : (
          <FaRegCircle className="text-gray-500" />
        )}
      </button>
      <label htmlFor="digital-marketing-for-software-companies" className="text-sm text-gray-700">digital-marketing</label>
    </div>
  </div>
</div>

            {/* Figma Link Field */}
            <div>
              <label
                htmlFor="figmaLink"
                className="block text-sm font-medium text-gray-700"
              >
                Figma Link
              </label>
              <input
                type="url"
                name="figmaLink"
                id="figmaLink"
                value={formData.figmaLink}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Website Link Field */}
            <div>
              <label
                htmlFor="websiteLink"
                className="block text-sm font-medium text-gray-700"
              >
                Website Link
              </label>
              <input
                type="url"
                name="websiteLink"
                id="websiteLink"
                value={formData.websiteLink}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* GitHub Link Field */}
            <div>
              <label
                htmlFor="githubLink"
                className="block text-sm font-medium text-gray-700"
              >
                GitHub Link
              </label>
              <input
                type="url"
                name="githubLink"
                id="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Project Screenshot Upload Field */}
            <div className="mt-9">
              <label
                htmlFor="projectScreenshot"
                className="block text-sm font-medium text-gray-700"
              >
                Project Screenshot
              </label>
              <div className="mt-1 border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                {formData.projectScreenshot || formData.screenshotUrl ? (
                  <div>
                    <img
                      src={
                        formData.screenshotUrl ||
                        (formData.projectScreenshot
                          ? URL.createObjectURL(formData.projectScreenshot)
                          : "")
                      }
                      alt="Project Screenshot"
                      className="mx-auto mb-4 max-w-full max-h-60 object-contain"
                    />
                  </div>
                ) : (
                  <p className="text-gray-500">
                    Choose a file or drag & drop it here
                  </p>
                )}
                <input
                  type="file"
                  name="projectScreenshot"
                  id="projectScreenshot"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("projectScreenshot")?.click()
                  }
                  className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg"
                >
                  Browse File
                </button>
              </div>
            </div>

            {/* Cancel and Post Now Buttons */}
            <div className="flex justify-between space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="w-full md:w-auto px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg"
              >
                {loading
                  ? "Loading..."
                  : projectId
                  ? "Update Project"
                  : "Add Project"}
              </button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AddProjectPage;
