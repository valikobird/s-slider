import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import Slide from './Slide';

const Slider = ({ sliderData }) => {
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
    setShowPrevButton(sliderData.length > 1);
    setShowNextButton(sliderData.length > 1);
  }, [sliderData]);

  const prevSlide = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + sliderData.length - 1) % sliderData.length
    );
  };

  const nextSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % sliderData.length);
  };

  const slideDetails = sliderData[activeIndex];

  return (
    <div className='slider'>
      {showPrevButton && (
        <FaAngleLeft className='navButton' onClick={() => prevSlide()} />
      )}
      <Slide {...slideDetails} />
      {showNextButton && (
        <FaAngleRight className='navButton' onClick={() => nextSlide()} />
      )}
    </div>
  );
};

export default Slider;
