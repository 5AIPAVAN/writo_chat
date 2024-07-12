
import React from 'react';
import Cards from './Cards';
import { FaChalkboardTeacher, FaLaptopCode, FaPalette, FaLanguage } from 'react-icons/fa';

const mentorshipFields = [
  { title: 'Mathematics', description: 'Expert mentors to help you excel in Mathematics.', icon: <FaChalkboardTeacher className="h-12 w-12" /> },
  { title: 'Physics', description: 'Expert mentors to help you excel in Physics.', icon: <FaChalkboardTeacher className="h-12 w-12" /> },
  { title: 'Chemistry', description: 'Expert mentors to help you excel in Chemistry.', icon: <FaChalkboardTeacher className="h-12 w-12" /> },
  { title: 'Programming', description: 'Learn to code with experienced programmers.', icon: <FaLaptopCode className="h-12 w-12" /> },
  { title: 'Art & Design', description: 'Develop your artistic skills with our mentors.', icon: <FaPalette className="h-12 w-12" /> },
  { title: 'Languages', description: 'Improve your language skills with native speakers.', icon: <FaLanguage className="h-12 w-12" /> },
];

const Cards_section = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Mentorship Fields</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mentorshipFields.map((field, index) => (
            <Cards key={index} title={field.title} description={field.description} icon={field.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards_section;
