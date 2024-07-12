import React, { useState } from 'react';

const MentorSection = () => {
  // Mock data for mentors grouped by categories and subjects
  const mentorsByCategory = [
    {
      category: 'Technology',
      subjects: ['Web Development', 'Mobile App Development', 'Data Science'],
      mentors: [
        { id: 1, name: 'John Doe', subject: 'Web Development' },
        { id: 2, name: 'Jane Smith', subject: 'Mobile App Development' },
        { id: 3, name: 'Alex Johnson', subject: 'Data Science' },
        // Add more mentors as needed
      ]
    },
    {
      category: 'Business',
      subjects: ['Entrepreneurship', 'Marketing', 'Finance'],
      mentors: [
        { id: 4, name: 'Emma Brown', subject: 'Entrepreneurship' },
        { id: 5, name: 'Michael Wilson', subject: 'Marketing' },
        { id: 6, name: 'Sophia Lee', subject: 'Finance' },
        // Add more mentors as needed
      ]
    },
    // Add more categories as needed
  ];

  // State to track selected subject for filtering
  const [selectedSubject, setSelectedSubject] = useState('');

  // Function to handle subject selection
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="container mx-auto py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Find Your Mentor</h2>
      {/* Filter buttons */}
      <div className="md:flex md:flex-row  flex flex-col items-center gap-3 justify-center space-x-4 mb-8 ">
        {/* All mentors button */}
        <button
          onClick={() => setSelectedSubject('')}
          className={`text-white font-semibold bg-blue-400 rounded-md p-2 ${selectedSubject === '' && 'underline'}`}
        >
          All Mentors
        </button>
        {/* Subject filter buttons */}
        {mentorsByCategory.map(category => (
          category.subjects.map(subject => (
            <button
              key={subject}
              onClick={() => handleSubjectSelect(subject)}
              className={`text-white font-semibold bg-blue-400 p-2 rounded-md ${selectedSubject === subject && 'underline'}`}
            >
              {subject}
            </button>
          ))
        ))}
      </div>
      {/* Mentor cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-6">
        {/* Render mentors based on selected subject */}
        {mentorsByCategory.map(category => (
          category.mentors.map(mentor => (
            selectedSubject === '' || category.subjects.includes(selectedSubject) ? (
              <div key={mentor.id} className="bg-white p-8 shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-4">{mentor.name}</h3>
                <p className="text-gray-700">{mentor.subject}</p>
              </div>
            ) : null
          ))
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
