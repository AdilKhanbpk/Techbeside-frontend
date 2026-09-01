"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MapPin, Clock } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { RootState } from '@/redux/store'
import { FiEdit2 } from "react-icons/fi"
import { FaRegTrashCan } from "react-icons/fa6"
import axios from 'axios'
import { backend_url } from '@/newLayout'
import { toast } from 'react-toastify'
import { deleteJob } from '@/redux/jobSlice'
import { useRouter } from 'next/navigation'


interface JobCardProps {
  jobId: string;
  category: string;
  title: string;
  location: string;
  type: string;
  company: string;
  timeAgo: Date | string;
}

const JobCard: React.FC<JobCardProps> = ({
  jobId,
  category = "Development",
  title = "Urgent webapp and mobile app",
  location = "Tokyo",
  type = "Freelance",
  company = "Techcreator",
  timeAgo = new Date(),
}) => {
  const timeAgoFormatted = typeof timeAgo === 'string' ? new Date(timeAgo) : timeAgo
  const timeDistance = formatDistanceToNow(timeAgoFormatted, { addSuffix: true })

  
  const dispatch = useDispatch();
  const deletedJobHandler = async () => {
    try {
      const res = await axios.delete(`${backend_url}/api/v1/job/delete/${jobId}`, {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })
      
      if (res.data.success){
        dispatch(deleteJob(jobId))
        toast.success(res.data.message)
      }
    } catch (error:any) {
      console.log(error);
      const errorMessage = error?.response?.data?.message
      toast.error(errorMessage)
    }
  }


  

  const router = useRouter()
  

  return (
    <div className="bg-[#F4F6FC] text-black rounded-[24px] p-6 lg:w-[360px] w-[300px] h-[280px] hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
          <span className="text-purple-600 text-sm font-medium">{category}</span>
        </div>

        <div className='flex gap-3'>
          <FaRegTrashCan className='cursor-pointer' onClick={deletedJobHandler}/>
          <FiEdit2 className='cursor-pointer' onClick={() => router.push(`/admin/all-jobs/addjob?jobId=${jobId}`)} />
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
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
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
  )
}


interface JobsCardProps {
  searchTerm: string;
}


const JobsCard: React.FC<JobsCardProps> = ({ searchTerm }) => {
  const { allJobs } = useSelector((state: RootState) => state.job)


const filteredJobs = allJobs?.filter(job =>
  job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.category?.toLowerCase().includes(searchTerm.toLowerCase())
)


  return (
    <div className=" md:px-10 px-3">
      <div className="flex flex-wrap py-9 gap-5 lg:justify-start justify-center w-full">
        
      {filteredJobs && filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job._id}>
              <JobCard
                jobId={job._id}
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
          <p className="text-center text-gray-500 w-full">No job post available</p>
        )}
      </div>
    </div>
  )
}

export default JobsCard
