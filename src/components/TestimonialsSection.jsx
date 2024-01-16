import classes from './TestimonialsSection.module.css';
import chartSmall from '../assets/customers/testimonials-chart-small.webp';
// import chartSmall2 from '../assets/customers/testimonials-chart-small.jpg';
import chartBig from '../assets/customers/testimonials-chart-big.jpg';
import { CUSTOMERS } from '../util/config.js';
import Testimonial from './Testimonial.jsx';

export default function TestimonialsPage() {
  return (
    <>
      <section className={classes['testimonials-section']}>
        <div className={classes.container}>
          <div className={classes.img}>
            <picture>
              <source
                srcSet={chartSmall}
                type='image/webp'
              />
              <source
                srcSet={chartBig}
                type='image/jpg'
              />

              <img
                src={chartBig}
                alt='Chart report of a budget'
                className={classes.img}
              />
            </picture>
          </div>
          <div className={classes['testimonials-container']}>
            <div>
              <h2>Ones you try it, you can&apos;t go back!</h2>
              <div className={classes.testimonials}>
                {CUSTOMERS.map((customer) => (
                  <Testimonial
                    key={customer.id}
                    img={customer.image}
                    imgAlt={customer.imageAlt}
                    name={customer.name}
                    testimonial={customer.testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
