"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { Send, CheckCircle2 } from "lucide-react";
import { backend_url } from "@/newLayout";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const OurTeam: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${backend_url}/api/v1/contact/send`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/confirmation");
        setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all";

  return (
    <section
      id="OurTeam"
      className="bg-gray-100 rounded-lg px-6 md:py-14 py-8 md:mt-16 mt-9"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span className="text-sm text-gray-500">Web, app & AI agent development</span>
          </div>
          <h2 className={`${display.className} text-3xl md:text-4xl lg:text-5xl text-gray-900 font-semibold leading-tight`}>
            Custom software built around your business, not a template
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
            From custom web application development and cross-platform mobile
            app development to AI agent development for workflow automation,
            our team designs and ships production-ready software that's built
            to convert visitors, retain users, and scale with your business.
            Whether you need an SEO-optimized website, a native iOS and
            Android app, or an AI-powered customer support agent, we handle
            strategy, design, and development end to end.
          </p>

          <ul className="mt-6 space-y-2.5">
            {[
              "Custom web development for startups and enterprises",
              "iOS & Android mobile app development services",
              "AI agent development for support & process automation",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-500 via-indigo-300 to-purple-300 shadow-xl shadow-indigo-100"
          >
            <div className="bg-white rounded-[15px] p-6 md:p-8">
              <h3 className={`${display.className} text-xl font-semibold text-gray-900 mb-1`}>
                Get a free project quote
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Tell us about your web, app, or AI agent project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    placeholder="First name*"
                    value={formData.firstName}
                    onChange={changeEventHandler}
                    required
                    className={fieldClass}
                  />
                  <input
                    name="lastName"
                    placeholder="Last name*"
                    value={formData.lastName}
                    onChange={changeEventHandler}
                    required
                    className={fieldClass}
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email address*"
                  value={formData.email}
                  onChange={changeEventHandler}
                  required
                  className={fieldClass}
                />

                <PhoneInput
                  country={"us"}
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  enableSearch
                  inputStyle={{
                    width: "100%",
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: "0.5rem",
                    padding: "1.65rem 1rem 1.65rem 50px",
                    fontSize: "1rem",
                    color: "#111827",
                  }}
                  buttonStyle={{
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRight: "none",
                    borderTopLeftRadius: "0.5rem",
                    borderBottomLeftRadius: "0.5rem",
                  }}
                  containerClass="custom-phone-input"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={changeEventHandler}
                  required
                  className={`${fieldClass} resize-none`}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg shadow-md shadow-indigo-200 transition-all hover:scale-[1.01]"
                >
                  {loading ? "Sending..." : "Send message"}
                  {!loading && <Send size={16} />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;