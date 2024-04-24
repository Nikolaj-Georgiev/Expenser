import { Element } from 'react-scroll';

import Hero from '../components/hero/Hero.jsx';
import About from './About.jsx';
import Testimonials from './Testimonials.jsx';

export default function HomePage() {
  return (
    <>
      <Element name='hero'>
        <Hero />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='testimonials'>
        <Testimonials />
      </Element>
    </>
  );
}
