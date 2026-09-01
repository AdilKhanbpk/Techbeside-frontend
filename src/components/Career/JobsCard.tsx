"use client";
import JobDetail from "./JobDetail";
import { useSelector } from "react-redux";
import { MapPin, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { RootState } from "@/redux/store";
import { useState } from "react";
import useGetAllJobs from "@/hooks/useGetAllJobs";


interface JobCardProps {
  category: string;
  title: string;
  location: string;
  type: string;
  company: string;
  timeAgo: Date;
}


const JobCard = ({
  category = "Development",
  title = "Urgent webapp and mobile app",
  location = "Tokyo",
  type = "Freelance",
  company = "Techcreator",
  timeAgo = new Date(),
}: JobCardProps) => {
  const timeAgoFormatted =
    typeof timeAgo === "string" ? new Date(timeAgo) : timeAgo;
  const timeDistance = formatDistanceToNow(timeAgoFormatted, {
    addSuffix: true,
  });

  return (
    <div className="bg-[#F4F6FC] text-black rounded-[24px] p-6 md:w-[360px] w-[300px] h-[280px] hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
          <span className="text-purple-600 text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>

      <div className="flex items-center justify-between space-x-4 mb-4 text-gray-600">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1"></div>
          <span className="text-sm">{type}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-20">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#9A00FF] rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm">T</span>
          </div>
          <span className="font-medium">{company}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <span>{timeDistance}</span>
        </div>
      </div>
    </div>
  );
};


const JobsCard = () => {
useGetAllJobs()
  const { allJobs } = useSelector((state: RootState) => state.job);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <div className=" mt-9 md:mt-16">
        <div className=" ">
          <p className="font-inter font-semibold md:text-5xl text-3xl text-purple-600">Open positions</p>
          <p className="font-inter font-normal text-[22px] text-[#838696] mt-2">
            Come join the team!
          </p>
        </div>
        <div className="flex flex-wrap py-8  md:gap-5  justify-center  gap-4  ">
        {allJobs?.length > 0 ? (
            allJobs.map((job) => (
              <div
                key={job._id}
                onClick={() => openModal(job)}
                className="cursor-pointer"
              >
                <JobCard
                  category={job.category}
                  title={job.title}
                  location={job.location}
                  type={job.employmentType}
                  company={job.company}
                  timeAgo={job.createdAt}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg text-center">
              Sorry, no job openings are available right now. Please check back
              later!
            </p>
          )}
        </div>
      </div>

      {selectedJob && (
        <JobDetail
          isOpen={isModalOpen}
          onClose={closeModal}
          job={selectedJob}
        />
      )}
    </>
  );
};

export default JobsCard;
