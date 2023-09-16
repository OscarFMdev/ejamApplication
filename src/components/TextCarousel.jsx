import React, { useState, useEffect } from 'react';
import CarouselStyles from '../styles/TextCarousel.module.scss'
import { LiaLessThanSolid, LiaGreaterThanSolid } from 'react-icons/lia'

const TextCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 700) {
        setVisibleItems(1);
      } else if (screenWidth <= 1100) {
        setVisibleItems(2);
      } else if (screenWidth <= 1500) {
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

  const renderPrevButton = visibleItems < 4 && (
    <button onClick={goToPrev} className={CarouselStyles.carouselBtn}>
      <LiaLessThanSolid />
    </button>
  );

  const renderNextButton = visibleItems < 4 && (
    <button onClick={goToNext} className={CarouselStyles.carouselBtn}>
      <LiaGreaterThanSolid />
    </button>
  );

  return (
    <div className={CarouselStyles.textCarousel}>
      {renderPrevButton}
      <div className={CarouselStyles.carouselContent}>
        {items.slice(currentIndex, currentIndex + visibleItems).map((item, index) => (
          <div key={index} className={CarouselStyles.carouselItem}>
            <img src={item.imageURL} alt="icon" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      {renderNextButton}
    </div>
  );
};

export default TextCarousel;
