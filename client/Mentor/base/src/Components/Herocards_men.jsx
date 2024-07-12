import React, { useState } from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { SlUserFollowing } from 'react-icons/sl';
import { FaMagic, FaChevronLeft, FaAngleRight } from 'react-icons/fa';

// Sample data (array of objects representing team members)
const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card1,
    type: 'Featured'
  },
  {
    name: 'John',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card2,
    type: 'Followed'
  },
  {
    name: 'John Smith',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card3,
    type: 'Personalized'
  },
  {
    name: 'Jane Doe',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card1,
    type: 'Featured'
  },
  {
    name: 'John',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card2,
    type: 'Followed'
  },
  {
    name: 'John Smith',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card3,
    type: 'Personalized'
  },
  {
    name: 'Jane Doe',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card1,
    type: 'Featured'
  },
  {
    name: 'John',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card2,
    type: 'Followed'
  },
  {
    name: 'John Smith',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card3,
    type: 'Personalized'
  },
  {
    name: 'Jane Doe',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card1,
    type: 'Featured'
  },
  {
    name: 'John',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card2,
    type: 'Followed'
  },
  {
    name: 'John Smith',
    role: 'At a school in Godhra, students whose parents had paid money were reportedly asked to..',
    imageUrl: card3,
    type: 'Personalized'
  },
  // Add more team members as needed
];

const Herocards_men = () => {
  const itemsPerPage = 9; // Number of team members per page (3x3 grid)
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState('All'); // State for filter type

  // Calculate total pages based on filtered members
  const filteredMembers = filterType === 'All'
    ? teamMembers
    : teamMembers.filter(member => member.type === filterType);

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  // Function to generate an array of page numbers with ellipses
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum number of page numbers to display

    // Case 1: Less than or equal to maxPagesToShow pages in total
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Case 2: More than maxPagesToShow pages in total
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 2) {
        endPage = maxPagesToShow;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxPagesToShow + 1;
      }

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the array to get the team members for the current page
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  // Function to handle pagination navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Function to handle filter type change
  const handleFilterChange = (type) => {
    if (type === filterType) {
      setFilterType('All'); // Reset to 'All' if the same filter is clicked again
    } else {
      setFilterType(type);
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  return (
    <div className="flex flex-col mt-4 item1">
      {/* Filter buttons */}
      <div className="mb-8 mt-4 flex flex-wrap justify-start ml-6">
        <button
          className={`mx-2 px-3 py-1 rounded-xl border border-black-25 ${
            filterType === 'Featured' ? 'text-[#699BF7] bg-[#E4F6F9] hover:bg-blue-600' : 'text-gray-800 bg-transparent hover:bg-[#E4F6F9]'
          }`}
          onClick={() => handleFilterChange('Featured')}
        >
          <BsBookmarkStarFill className="inline-block mr-2 text-[#699BF7]" />
          Featured
        </button>
        <button
          className={`mx-2 px-3 py-1 rounded-xl border border-black-25 ${
            filterType === 'Followed' ? 'text-[#699BF7] bg-[#E4F6F9] hover:bg-blue-600' : 'text-gray-800 bg-transparent hover:bg-[#E4F6F9]'
          }`}
          onClick={() => handleFilterChange('Followed')}
        >
          <SlUserFollowing className="inline-block mr-2 text-[#699BF7]" />
          Followed
        </button>
        <button
          className={`mx-2 px-3 py-1 rounded-xl border border-black-25 ${
            filterType === 'Personalized' ? 'text-[#699BF7] bg-[#E4F6F9] hover:bg-blue-600' : 'text-gray-800 bg-transparent hover:bg-[#E4F6F9]'
          }`}
          onClick={() => handleFilterChange('Personalized')}
        >
          <FaMagic className="inline-block mr-2 text-[#699BF7]" />
          Personalized
        </button>
      </div>

      {/* Team members grid */}
      <div className="flex flex-wrap justify-center item1">
        {currentMembers.map((member, index) => (
          <div key={index} className="p-4 lg:w-1/3 md:w-1/3 w-full">
            <div className="h-full flex flex-col items-center">
              <div className="mb-4">
                <img
                  alt={member.name}
                  className="rounded-lg object-cover object-center"
                  style={{ width: '300px', height: '300px' }}
                  src={member.imageUrl}
                />
              </div>
              <div className="w-full ml-1 text-left px-16">
                <h2 className="title-font font-bold item1 text-lg ml-2 text-gray-900">{member.name}</h2>
                <h3 className={`text-[#0082AB] mb-3 ${index === 0 ? 'md:text-left' : 'md:text-left'}`}>{member.role}</h3>
                {/* Social icons can be added here */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="w-full flex justify-center mt-4 mb-7">
          <button
            className={`mx-2 px-3 py-1 rounded-md ${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft /> 
          </button>

          {/* Render page numbers */}
          {generatePageNumbers().            map((pageNumber, index) => (
              <button
                key={index}
                className={`mx-2 px-3 py-1 rounded-md ${
                  pageNumber === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'bg-transparent text-gray-800 hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => {
                  if (typeof pageNumber === 'number') {
                    goToPage(pageNumber);
                  }
                }}
              >
                {pageNumber === '...' ? '...' : pageNumber}
              </button>
            ))}

          <button
            className={`mx-2 px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Herocards_men;

