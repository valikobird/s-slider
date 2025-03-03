import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import Slide from './Slide';
import { list } from '../data';

const Slider = () => {
  const [data, setData] = useState(list);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isAuto, setIsAuto] = useState(false);

  useEffect(() => {
    if (isAuto) {
      setInterval(() => {
        nextSlide();
      }, 3000);
    }
  }, []);

  useEffect(() => {
    setShowPrevButton(data.length > 1);
    setShowNextButton(data.length > 1);
  }, [data]);

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex + data.length - 1) % data.length
    );
  };

  const nextSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % data.length);
  };

  return (
    <section className='slider'>
      {data.map((slideDetails, slideIndex) => {
        return (
          <Slide
            {...slideDetails}
            relativeIndex={slideIndex - activeIndex}
            key={slideDetails.id}
          />
        );
      })}
      {showPrevButton && (
        <FaAngleLeft className='navButton prev' onClick={() => prevSlide()} />
      )}
      {showNextButton && (
        <FaAngleRight className='navButton next' onClick={() => nextSlide()} />
      )}
    </section>
  );
};

export default Slider;
