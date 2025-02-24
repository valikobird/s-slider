import { useState } from 'react';
import { longList } from './data';
import Slider from './components/Slider';

const App = () => {
  const [data, setData] = useState(longList);

  return (
    <section className='sliderContainer'>
      <Slider sliderData={data} />
    </section>
  );
};

export default App;
