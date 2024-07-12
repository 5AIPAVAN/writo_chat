import React from 'react';

const Promotion = () => {
  const benefits = [
    {
      id: 1,
      title: '30% Cheaper',
      description: 'Unlock personalized guidance at a fraction of the cost of traditional courses.',
      icon: '💰',
    },
    {
      id: 2,
      title: '4X Results',
      description: 'Experience exponential growth with tailored support from seasoned mentors.',
      icon: '📈',
    },
    {
      id: 3,
      title: '50% Faster',
      description: 'Accelerate your learning journey with focused, one-on-one mentorship.',
      icon: '⏩',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Move Over Traditional Courses</h2>
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">Start Making Progress with 1:1 Long Term Mentorship</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map(benefit => (
            <div key={benefit.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-700 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotion;
