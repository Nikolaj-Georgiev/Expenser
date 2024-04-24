/* eslint-disable react/prop-types */
import classes from './ErrorPageContent.module.css';

export default function ErrorPageContent({
  img,
  imgText,
  title,
  cssClass,
  children,
}) {
  return (
    <>
      <div className={classes.content}>
        <h1>{title}</h1>
        <img
          src={img}
          alt={imgText}
          className={classes[cssClass]}
        />
        <p>{children}</p>
      </div>
    </>
  );
}
