import classes from './Footer.module.css';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className={classes.container}>
      <p className={classes.copyright}>
        Copyright &copy; 2024 by GNikolay. All tights reserved!
      </p>
      <div className={classes.box}>
        <p className={classes.contacts}>created and designed by</p>
        <motion.span
          whileHover={{ scale: 2, transition: { duration: 0.5 } }}
          className={classes.heading}
        >
          GNikolay
        </motion.span>
      </div>
      <div className={classes.box}>
        <p className={classes.contacts}>Contact me</p>
        <ul className={classes.links}>
          <motion.li
            whileHover={{ scale: 2 }}
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
              ></ion-icon>
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 2 }}
            whileTap={{ scale: 0.85 }}
          >
            <a
              className={classes.link}
              href='https://github.com/NGNikolay'
              target='_blank'
              rel='noreferrer'
            >
              <ion-icon
                class='social-icon'
                name='logo-github'
              ></ion-icon>
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 2 }}
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
              ></ion-icon>
            </a>
          </motion.li>
        </ul>
      </div>
    </footer>
  );
}
