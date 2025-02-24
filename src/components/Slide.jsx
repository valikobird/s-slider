import { FaQuoteRight } from 'react-icons/fa';

const Slide = ({ image, name, title, quote }) => {
  return (
    <article className='slide'>
      <img src={image} alt={name} className='image' />
      <h3 className='name'>{name}</h3>
      <span className='title'>{title}</span>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='quoteIcon' />
    </article>
  );
};

export default Slide;
