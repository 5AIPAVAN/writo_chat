import React from 'react';
import backgroundImage from '../assets/background.png'; // Import your background image
import roundedImage from '../assets/image.png'; // Import your rounded image

const Navbar_men = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center mt-3" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="rounded-full p-4">
        <img src={roundedImage} alt="Rounded Image" className="rounded-full w-40 h-40" />
      </div>
      <p className="text-black text-lg font-bold">Sarah Shiekh</p>
      <p className="text-black text-lg font-bold">91+123456789</p>
    </div>
  );
};

export default Navbar_men;
