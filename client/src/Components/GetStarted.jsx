import React from 'react';

const GetStarted= () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get Started in 3 Easy Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">1. Find Your Ideal Mentor</h3>
            <p className="text-gray-700 mb-6">Browse from 600+ vested mentors and get to choose your ideal mentor according to your preferences and aspirations.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Find Your Mentor</button>
          </div>
          {/* Step 2 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">2. Book a FREE Trial Session</h3>
            <p className="text-gray-700 mb-6">Connect with mentor and see how mentor will help you achieve your goal faster & avoid asking for referrals, etc.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Book a FREE Trial</button>
          </div>
          {/* Step 3 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">3. Start 1:1 Long Term Mentorship</h3>
            <p className="text-gray-700 mb-6">Bravo!! Get started with your personalised mentorship in the right direction with a mentor of your choice.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Start Preparing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
