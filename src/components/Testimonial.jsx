import classes from './Testimonial.module.css';

export default function Testimonial({ testimonial, img, imgAlt, name }) {
  return (
    <>
      <figure className={classes.testimonial}>
        <img
          className={classes.img}
          src={img}
          alt={imgAlt}
        />
        <blockquote className={classes.text}>{testimonial}</blockquote>
        <p className={classes.name}>&mdash; {name}</p>
      </figure>
    </>
  );
}
