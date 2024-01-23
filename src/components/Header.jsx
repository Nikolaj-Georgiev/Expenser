import { Link } from 'react-router-dom';
import logoImg from '../assets/logo-trans.png';
import classes from './Header.module.css';

// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
  return (
    <header className={`${classes.header} ${classes.sticky}`}>
      <Link
        to='/'
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
