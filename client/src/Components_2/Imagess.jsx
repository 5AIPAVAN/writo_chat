import React from 'react';
import class6 from './class6.png'
import physics from './physics.png'
import chemistry from './chemistry.png'
import maths from './maths.png'
import biology from './biology.png'


const ImageGrid = ({ images }) => {
  const styles = {
    imageGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '5px',
      width:'85%'
    },
    imageContainer: {
      flex: '1 1 calc(25% - 10px)',
      boxSizing: 'border-box',
    },
    imageItem: {
      width: '90%',
      height: 'auto',
      display: 'block',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.imageGrid}>
      {images.map((image, index) => (
        <div style={styles.imageContainer} key={index}>
          <img src={image.src} alt={image.alt} style={styles.imageItem} />
        </div>
      ))}
    </div>
  );
};

const Imagess = () => {
  const images = [
    { src:physics, alt: 'Image 1' },
    { src:chemistry, alt: 'Image 2' },
    { src:maths, alt: 'Image 3' },
    { src:biology, alt: 'Image 4' },
  ];

  return (
    <div className="App" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <ImageGrid images={images} />
    </div>
  );
};

export default Imagess;
