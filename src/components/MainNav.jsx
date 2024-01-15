import { Link, NavLink } from 'react-router-dom';
import Li from '../UI/Li';
import classes from './MainNav.module.css';

export default function MainNav() {
  const linkCssClass = `${classes['main-nav-link']} ${classes['nav-base']}`;
  const active = `${linkCssClass} ${classes.active}`;
  const buttonsCssClass = `${classes['main-nav-link']} ${classes['nav-cta']}`;
  return (
    <nav className={classes['main-nav']}>
      <ul className={classes['main-nav-list']}>
        <Li>
          <NavLink
            to='about'
            className={({ isActive }) => (isActive ? active : linkCssClass)}
            // exact='true'
            // replace
          >
            About
          </NavLink>
        </Li>

        <Li>
          <NavLink
            className={({ isActive }) => (isActive ? active : linkCssClass)}
            to='testimonials'
            // exact='true'
            // replace
          >
            Testimonials
          </NavLink>
        </Li>

        <Li>
          <Link
            className={buttonsCssClass}
            to='login'
          >
            Login
          </Link>
        </Li>

        <Li>
          <Link
            className={buttonsCssClass}
            to='register'
          >
            Register
          </Link>
        </Li>
      </ul>
    </nav>
  );
}
