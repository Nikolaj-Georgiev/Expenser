// import Anchor from '../components/Anchor.jsx';
import Hero from '../components/hero/Hero.jsx';
import About from './About.jsx';
import Testimonials from './Testimonials.jsx';

import { Element } from 'react-scroll';

export default function LandingPage() {
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
