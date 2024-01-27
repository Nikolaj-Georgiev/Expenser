import { motion } from 'framer-motion';

import classes from './TestimonialsSection.module.css';
import chartSmall from '../../assets/customers/testimonials-chart-small.webp';
import { CUSTOMERS } from '../../util/config.js';
import Testimonial from './Testimonial.jsx';

export default function TestimonialsPage() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
      x: 0,
    },
    hidden: {
      opacity: 0,
      transition: { when: 'afterChildren' },
    },
  };

  const left = {
    visible: {
      opacity: 1,
      x: 0,
      duration: 0.4,
    },
    hidden: {
      opacity: 0,
      x: -300,
    },
  };

  const right = {
    visible: {
      opacity: 1,
      x: 0,
      duration: 0.4,
    },
    hidden: {
      opacity: 0,
      x: 300,
    },
  };

  return (
    <>
      <section
        className={classes['testimonials-section']}
        id='testimonials'
      >
        <motion.div
          className={classes['section-container']}
          initial='hidden'
          whileInView='visible'
          // animate='visible'
          variants={list}
        >
          <motion.h2
            className={classes.heading}
            variants={left}
          >
            Ones you try it, you can&apos;t go back!
          </motion.h2>
          <div className={classes.container}>
            <motion.div
              className={classes.img}
              variants={left}
            >
              {/* <picture>
                <source
                  srcSet={chartSmall}
                  type='image/webp'
                />
                <source
                  srcSet={chartBig}
                  type='image/jpg'
                /> */}

              <img
                src={chartSmall}
                alt='Chart report of a budget'
                className={classes.img}
              />
              {/* </picture> */}
            </motion.div>

            <div>
              <motion.div
                className={classes.testimonials}
                variants={right}
              >
                {CUSTOMERS.map((customer) => (
                  <Testimonial
                    key={customer.id}
                    img={customer.image}
                    imgAlt={customer.imageAlt}
                    name={customer.name}
                    testimonial={customer.testimonial}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
