/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import classes from './Button.module.css';

export default function Button({ children, isCta, isText, ...props }) {
  let cssClasses = `${classes.button}`;

  if (isCta) {
    cssClasses = `${cssClasses} ${classes.cta}`;
  }

  if (isText) {
    cssClasses = `${cssClasses} ${classes.text}`;
  }

  return (
    <motion.button
      className={cssClasses}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.85 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
