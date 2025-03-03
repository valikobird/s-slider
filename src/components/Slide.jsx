import { FaQuoteRight } from 'react-icons/fa';

const Slide = ({ image, name, title, quote, relativeIndex }) => {
  return (
    <article
      className='slide'
      style={{
        transform: `translateX(${100 * relativeIndex}%)`,
        opacity: relativeIndex === 0 ? 1 : 0,
        visibility: relativeIndex === 0 ? 'visible' : 'hidden',
      }}
    >
      <img src={image} alt={name} className='image' />
      <h3 className='name'>{name}</h3>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='quoteIcon' />
    </article>
  );
};

export default Slide;
