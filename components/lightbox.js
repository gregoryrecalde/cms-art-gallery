import React, { useState, useEffect, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { render } from "react-dom";
function Lightbox({ images, onClose, currentIndex: externalIndex }) {
  const [currentIndex, setCurrentIndex] = useState(externalIndex);
  const currentImage = images[currentIndex];
  const transparency = 0;

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const updateIndexExternally = useCallback(
    (newIndex) => {
      setCurrentIndex(newIndex);
    },
    [setCurrentIndex]
  );

  useEffect(() => {
    setCurrentIndex(externalIndex);
  }, [externalIndex]);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [currentIndex]);

  useEffect(() => {
    // Si el índice externo cambia, actualiza el índice interno del Lightbox
    setCurrentIndex(externalIndex);
  }, [externalIndex]);

  return (
    <div className={`lightbox ${currentIndex !== null ? 'lightbox-active' : ''}`}>
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose}>
          &times;
        </button>
        <img src={currentImage.src} alt={currentImage.title} className="lightbox-image" />
        <div className="lightbox-info">
          <h2>{currentImage.title}</h2>
          <p>{currentImage.description}</p>
        </div>
      </div>
      <div className="lightbox-nav">
        <button onClick={prevImage} className="lightbox-nav-button">
          <IoIosArrowBack className="mr-1 shawn-primary-text-color" />
        </button>
        <button onClick={nextImage} className="lightbox-nav-button">
          <IoIosArrowForward className="mr-1 shawn-primary-text-color" />
        </button>
      </div>
    </div>
  );
}

export default Lightbox;
