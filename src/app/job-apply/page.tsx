import React, { Suspense } from 'react';
import JobApplicationForm from '@/components/Career/ApplicationForm';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.jobApply;

const Page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      {/* Background Image Section */}
      <div className=" w-full h-72 md:h-96 flex flex-col items-center bg-black justify-center overflow-hidden">
        <h1 className='text-white text-3xl font-bold'>JOIN TechBeside </h1>
        <p className='text-white text-lg mt-2'>Apply Now</p>

      </div>

      {/* Form Section */}
      <div className="w-full  flex md:flex-row flex-col p-4 justify-around  ">
        <div className=' mt-16 flex flex-col items-center'>
          <h2 className='text-3xl font-bold mb-4'>Apply for job</h2>
          <p className='text-lg'>Send us your CV by filling the form</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <JobApplicationForm />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
