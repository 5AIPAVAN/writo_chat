import React from 'react'
import Mentor_nav from './Mentor_nav'
import Community_footer from './Community_footer'
import { Link } from 'react-router-dom';
import { services } from './services_2';
import Navbar from './Navbar';
const Services1 = () => {
  return (
    <div>
      <Navbar/>
      <Mentor_nav/>
      <div className="bg-white text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mt-20 text-black font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <Link to={`/mentor/service/${service.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Community_footer/>
    </div>
  )
}

export default Services1
