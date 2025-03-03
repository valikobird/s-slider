import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { list } from '../data';
import SlickSlide from './SlickSlide';

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className='slickSlider'>
      <Slider {...settings}>
        {list.map((slideDetails) => {
          return <SlickSlide {...slideDetails} key={slideDetails.id} />;
        })}
      </Slider>
    </section>
  );
};

export default SlickSlider;
