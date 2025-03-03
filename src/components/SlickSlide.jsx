import { FaQuoteRight } from 'react-icons/fa';

const SlickSlide = ({ image, name, title, quote }) => {
  return (
    <article>
      <img src={image} alt={name} className='image' />
      <h3 className='name'>{name}</h3>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='quoteIcon' />
    </article>
  );
};

export default SlickSlide;
