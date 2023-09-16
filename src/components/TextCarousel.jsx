import React, { useState, useEffect } from 'react';
import CarouselStyles from '../styles/TextCarousel.module.scss'

const TextCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 360) {
        setVisibleItems(1);
      } else if (screenWidth <= 768) {
        setVisibleItems(2);
      } else if (screenWidth <= 1300) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - visibleItems : prevIndex - 1
    );
  };

  return (
    <div className={CarouselStyles.textCarousel}>
      <button onClick={goToPrev} className={CarouselStyles.carouselBtn}>
        &lt;
      </button>
      <div className={CarouselStyles.carouselContent}>
        {items.slice(currentIndex, currentIndex + visibleItems).map((item, index) => (
          <div key={index} className={CarouselStyles.carouselItem}>
            <img src={item.imageURL} alt="icon" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <button onClick={goToNext} className={CarouselStyles.carouselBtn}>
        &gt;
      </button>
    </div>
  );
};

export default TextCarousel;

