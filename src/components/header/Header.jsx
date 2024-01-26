import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoImg from '../../assets/logo-trans.png';
import classes from './Header.module.css';

// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
  const token = useSelector((state) => state.authForm.token);

  return (
    <header className={`${classes.header} ${classes.sticky}`}>
      <Link
        to={!token ? '/' : '/dashboard'}
        onClick={() => document.body.scrollIntoView({ behavior: 'smooth' })}
      >
        <img
          className={classes.logo}
          src={logoImg}
          alt='Image of a piggy bank'
        />
      </Link>
      {children}
    </header>
  );
}
