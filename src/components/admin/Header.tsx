import Link from 'next/link';
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from 'react-icons/io'

// Define the prop type
interface HeaderProps {
  onSearch: (term: string) => void; // Function to handle search term changes
  buttonType: 'job' | 'project'; // Determine the type of button to display
}

const Header: React.FC<HeaderProps> = ({ onSearch, buttonType }) => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch(term) 
  }

  return (
    <div className=' mt-20'>
      <header className="flex flex-col mt-6  sm:mt-0 max-w-6xl md:flex-row justify-between items-center space-y-4 md:space-y-0  md:ml-11 ">
        <div className="flex items-center  ">
           <Link
            href={buttonType === 'job' ? '/admin/all-jobs/addjob' : '/admin/all-projects/addproject'} 
            passHref
          >
            <button
              aria-label={buttonType === 'job' ? "Add Job" : "Add Project"}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow-sm hover:bg-purple-700"
            >
              <IoMdAdd className="mr-2" /> {buttonType === 'job' ? 'Add Job' : 'Add Project'}
            </button>
          </Link>
        </div>
        <div className="relative border rounded-lg w-[300px] md:w-auto">
          <input
            className=" px-4 py-2 w-[300px] border-2 border-black  rounded-lg shadow-sm focus:outline-none "
            placeholder="Search"
            type="text"
            aria-label="Search Jobs"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FiSearch size={20} className="absolute right-3 top-3 " />
        </div>
      </header>
    </div>
  )
}

export default Header
