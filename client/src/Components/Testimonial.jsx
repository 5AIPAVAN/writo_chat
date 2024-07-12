import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu lorem auctor, fringilla quam vitae, interdum justo. Duis sollicitudin velit ac nisi pretium suscipit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Data Scientist',
      text: 'Integer vestibulum mauris eget augue consequat, ut bibendum justo molestie. Vivamus nec nulla nec est ultricies cursus. Nullam nec eleifend felis.',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      position: 'Product Manager',
      text: 'Curabitur at sapien sit amet urna hendrerit fermentum. In ullamcorper augue a dolor vehicula, eget consequat eros tincidunt. Proin id velit id enim ultrices faucibus.',
    },
  ];

  return (
    <div className="container mx-auto py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-8 shadow-md rounded-lg">
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src={`https://randomuser.me/api/portraits/men/${testimonial.id}.jpg`} alt={testimonial.name} />
              </div>
              <div className="ml-4">
                <div className="text-xl font-semibold">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
