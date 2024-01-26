import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import classes from './Header.module.css';
import logoImg from '../../assets/logo-trans.png';
import { loginActions } from '../../store/auth-slice';

// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
  const token = useSelector((state) => state.authForm.token);
  const logoRout = useSelector((state) => state.authForm.logoRout);
  const dispatch = useDispatch();

  useEffect(() => {
    const setLogoRout = (rout) => {
      dispatch(loginActions.logoRoutFn(rout));
    };
    if (token) {
      setLogoRout('/dashboard');
    } else {
      setLogoRout('/');
    }
  }, [token, dispatch]);

  return (
    <header className={`${classes.header} ${classes.sticky}`}>
      <Link
        // to={!token ? '/' : '/dashboard'}
        to={logoRout}
        onClick={() => document.body.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.img
          className={classes.logo}
          src={logoImg}
          alt='Image of a piggy bank'
        />
      </Link>
      {children}
    </header>
  );
}
