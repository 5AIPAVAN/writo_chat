import React from 'react';
import Mentor_nav from './Mentor_nav';
import Community_nav from './Community_nav';
import Navbar from './Navbar';

const steps = [
  {
    step: 1,
    title: 'Select a Mentor',
    description: 'Choose a mentor from our list of experienced professionals.',
    icon: '👨‍🏫'
  },
  {
    step: 2,
    title: 'Schedule a Chat',
    description: 'Pick a suitable time for your chat session.',
    icon: '📅'
  },
  {
    step: 3,
    title: 'Start Chatting',
    description: 'Join the chat session and start discussing your queries.',
    icon: '💬'
  }
];

const mentors = [
  {
    name: 'John Doe',
    qualifications: 'M.Sc. in Computer Science',
    experience: '10 years',
    icon: '👨‍🏫'
  },
  {
    name: 'Jane Smith',
    qualifications: 'MBA in Business Administration',
    experience: '5 years',
    icon: '👩‍🏫'
  },
  {
    name: 'Emily Johnson',
    qualifications: 'BFA in Graphic Design',
    experience: '15 years',
    icon: '👩‍🎨'
  }
];

const ChatwithMentor = () => {
  return (
    <div>
       
       <Navbar/>
       <Mentor_nav/>
    <div className="bg-white text-black pt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Chat with a Mentor</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Steps to Start Chatting</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h4 className="text-xl text-white font-semibold mb-2">{`Step ${step.step}: ${step.title}`}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Available Mentors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="text-5xl mb-4">{mentor.icon}</div>
                <h4 className="text-xl text-white font-semibold mb-2">{mentor.name}</h4>
                <p className="text-gray-300"><strong>Qualifications:</strong> {mentor.qualifications}</p>
                <p className="text-gray-300"><strong>Experience:</strong> {mentor.experience}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
                  Chat Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Ask a Query</h3>
          <form className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="query">
                Your Query
              </label>
              <textarea 
                id="query" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
              />
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit Query
            </button>
          </form>
        </div>
      </div>
      </div>
     <Community_nav/>
    </div>
  );
};

export default ChatwithMentor;
