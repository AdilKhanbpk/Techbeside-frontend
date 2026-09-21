"use client";
import JobDetail from "./JobDetail";
import { useSelector } from "react-redux";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
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
  company = "TechBeside",
  timeAgo = new Date(),
}: JobCardProps) => {
  const timeAgoFormatted =
    typeof timeAgo === "string" ? new Date(timeAgo) : timeAgo;
  const timeDistance = formatDistanceToNow(timeAgoFormatted, {
    addSuffix: true,
  });

  return (
    <div className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border border-gray-100 hover:border-indigo-200 cursor-pointer">
      {/* Category Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
        {category}
      </div>

      {/* Job Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Job Details */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Briefcase className="w-4 h-4" />
          <span className="text-sm">{type}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-indigo-600 text-sm font-semibold">T</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{company}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{timeDistance}</span>
            </div>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

const JobsCard = () => {
  useGetAllJobs();
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
      <section className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-indigo-600 mb-4">Join Our Team</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600">
            Find your next opportunity and grow with us
          </p>
        </div>

        {/* Jobs Grid */}
        {allJobs?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allJobs.map((job) => (
              <div key={job._id} onClick={() => openModal(job)}>
                <JobCard
                  category={job.category}
                  title={job.title}
                  location={job.location}
                  type={job.employmentType}
                  company={job.company}
                  timeAgo={job.createdAt}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">
              No job openings available right now.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Check back soon for new opportunities!
            </p>
          </div>
        )}
      </section>

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
