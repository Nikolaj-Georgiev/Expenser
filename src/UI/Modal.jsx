import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import classes from './Modal.module.css';

export default function Modal({ children, title, onClose, logo, alt }) {
  return createPortal(
    <>
      <div
        className={classes.backdrop}
        onClick={onClose}
      />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{ duration: 0.5 }}
        open
        className={classes.modal}
      >
        {logo ? (
          <img
            src={logo}
            alt={alt}
            className={classes.img}
          />
        ) : null}
        <h2 className={classes.heading}>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
