import { motion } from 'framer-motion';

import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.container}>
      <p className={classes.copyright}>
        Created and designed by <span>NGNikolay</span>. Copyright &copy; 2024.
        All tights reserved!
      </p>
      <div className={classes.box}>
        <motion.span
          whileHover={{ scale: 2, transition: { duration: 0.5 } }}
          className={classes.heading}
        >
          EXPENSER
        </motion.span>
      </div>
      <div className={classes.box}>
        <p className={classes.contacts}>Contact me</p>
        <ul className={classes.links}>
          <motion.li
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.85 }}
          >
            <a
              className={classes.link}
              href='https://www.facebook.com/nikolay.georgiev.7503/'
              target='_blank'
              rel='noreferrer'
            >
              <ion-icon
                class='social-icon'
                name='logo-facebook'
                size='large'
              ></ion-icon>
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.85 }}
          >
            <a
              className={classes.link}
              href='https://github.com/Nikolaj-Georgiev'
              target='_blank'
              rel='noreferrer'
            >
              <ion-icon
                class='social-icon'
                name='logo-github'
                size='large'
              ></ion-icon>
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.85 }}
          >
            <a
              className={classes.link}
              href='https://www.linkedin.com/in/nikolay-georgiev-73556635/'
              target='_blank'
              rel='noreferrer'
            >
              <ion-icon
                class='social-icon'
                name='logo-linkedin'
                size='large'
              ></ion-icon>
            </a>
          </motion.li>
        </ul>
      </div>
    </footer>
  );
}
