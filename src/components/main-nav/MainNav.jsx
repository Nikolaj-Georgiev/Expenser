/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import { loginActions } from '../../store/auth-slice';
import classes from './MainNav.module.css';

export default function MainNav() {
  const linkCssClass = `${classes['main-nav-link']} ${classes['nav-base']}`;
  const active = `${linkCssClass} ${classes.active}`;
  const buttonsCssClass = `${classes['main-nav-link']} ${classes['nav-cta']}`;

  const token = useSelector((state) => state.authForm.token);

  const dispatch = useDispatch();

  function toggleAuthFormHandler(formMode) {
    dispatch(loginActions.toggle(formMode));
  }

  return (
    <nav className={classes['main-nav']}>
      {!token && (
        <ul className={classes['main-nav-list']}>
          <motion.li
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
          >
            <ScrollLink
              activeClass={active}
              to='about'
              spy={true}
              smooth={true}
              offset={-96}
              duration={300}
              className={linkCssClass}
            >
              About
            </ScrollLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
          >
            <ScrollLink
              activeClass={active}
              to='testimonials'
              spy={true}
              smooth={true}
              offset={-96}
              duration={300}
              className={linkCssClass}
            >
              Testimonials
            </ScrollLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
          >
            <Link
              className={buttonsCssClass}
              to='login'
              onClick={() => toggleAuthFormHandler('login')}
            >
              Login
            </Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
          >
            <Link
              className={buttonsCssClass}
              to='register'
              onClick={() => toggleAuthFormHandler('register')}
            >
              Register
            </Link>
          </motion.li>
        </ul>
      )}
      {token && (
        <ul className={classes['main-nav-list']}>
          <motion.li
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
          >
            <Link
              className={buttonsCssClass}
              to='new-expense'
            >
              New Expense
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
          >
            <Link
              className={buttonsCssClass}
              to='new-saving'
            >
              New Saving
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
          >
            {/* <Form
              action='/logout'
              method='post'
            >
              <Button isCta={true}>Logout</Button>
            </Form> */}
            <Link
              className={buttonsCssClass}
              to='/logout'
            >
              Logout
            </Link>
          </motion.li>
        </ul>
      )}
    </nav>
  );
}
