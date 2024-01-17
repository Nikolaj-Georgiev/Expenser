import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
          <ScrollLink
            activeClass={active}
            to='about'
            spy={true}
            smooth={true}
            offset={-96}
            duration={800}
            className={linkCssClass}
          >
            About
          </ScrollLink>
        </Li>
        <Li>
          <ScrollLink
            activeClass={active}
            to='testimonials'
            spy={true}
            smooth={true}
            offset={-96}
            duration={800}
            className={linkCssClass}
          >
            Testimonials
          </ScrollLink>
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
