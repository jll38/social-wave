import React, { useState, useEffect } from 'react';
import '../styles/FilmReel.module.css';

interface FilmReelProps {
  images: string[];
  direction?: 'down' | 'up';
  duration?: number;
}

const FilmReel: React.FC<FilmReelProps> = ({
  images,
  direction = 'down',
  duration = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div className="film-reel w-1/4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`film-reel-image ${
            direction === 'up' ? 'scroll-up' : 'scroll-down'
          } ${currentIndex === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default FilmReel;
