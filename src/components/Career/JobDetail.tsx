// JobDetail.tsx
import { Dialog, Transition } from "@headlessui/react";
import { DotIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

interface JobDetailProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    _id: string;
    category: string;
    company: string;
    createdAt: string;
    description: string;
    employmentType: string;
    experience: string;
    jobType: string;
    location: string;
    qualifications: string[];
    salary: number;
    skills: string[];
    title: string;
  };
}

const JobDetail = ({ isOpen, onClose, job }: JobDetailProps) => {
const router = useRouter()
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto mt-16 sm:mb-0 mb-16">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl bg-white rounded-2xl shadow-xl  ">
                <h1 className="text-center font-bold text-2xl rounded-t-2xl  text-black bg-purple-600 p-6">Job Details</h1>
                <Dialog.Title className="text-lg mt-5 p-3 font-medium text-gray-900">
                  <p className="text-gray-600">
                    <span className="text-blue-600  ">Title:</span> {job.title}
                  </p>
                </Dialog.Title>
                <div className="mt-4 flex flex-col p-3 gap-5">
                  <p className="text-gray-600">
                    <span className="text-blue-600">Category:</span>{" "}
                    {job.category}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-blue-600">Company:</span>{" "}
                    {job.company}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-blue-600">Location:</span>{" "}
                    {job.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-blue-600">Employment Type:</span>{" "}
                    {job.employmentType}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-blue-600">Salary:</span> Rs{" "}
                    {job.salary}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-blue-600">Description:</span>{" "}
                    {job.description}
                  </p>
                  <div>
                    <div>
                      <h2 className="text-blue-600">Requirements:</h2>
                    </div>

                    <div className="text-sm mx-4">
                      <p className="flex item-center text-gray-600">
                        <span>
                          <DotIcon />
                        </span>{" "}
                        {job.qualifications?.join(", ") || "N/A"}
                      </p>
                      <p className="flex item-center text-gray-600 ">
                        <span>
                          <DotIcon />
                        </span>{" "}
                        At least {job.experience} of experience
                      </p>

                      <p className="flex item-center text-gray-600">
                        <span>
                          <DotIcon />
                        </span>{" "}
                        {job.skills?.join(", ") || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex md:justify-end justify-start p-3">
                  <button
                    onClick={onClose}
                    className="mr-4 px-4 py-2 text-sm text-white bg-red-500 rounded"
                  >
                    Cancel
                  </button>
                  <button  onClick={() => router.push(`/job-apply?jobId=${job._id}`)} className="px-4 py-2 text-sm text-white bg-purple-600 rounded ">
                    Apply
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default JobDetail;
