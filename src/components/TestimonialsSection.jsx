import classes from './TestimonialsSection.module.css';
import chartSmall from '../assets/customers/testimonials-chart-small.webp';
// import chartSmall2 from '../assets/customers/testimonials-chart-small.jpg';
import chartBig from '../assets/customers/testimonials-chart-big.jpg';

export default function TestimonialsPage() {
  return (
    <>
      <section className={classes['testimonials-section']}>
        <div className={classes.container}>
          <div className={classes['testimonials-container']}>
            <div>
              <h2>Some Nice Heading</h2>
              <div>
                <blockquote></blockquote>
              </div>
            </div>
          </div>
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
        </div>
      </section>
    </>
  );
}
