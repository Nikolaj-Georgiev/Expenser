import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.container}>
      <p className={classes.copyright}>
        Copyright &copy; 2024 by GNikolay. All tights reserved!
      </p>
      <div className={classes.box}>
        <p className={classes.contacts}>created and designed by</p>
        <span className={classes.heading}>GNikolay</span>
      </div>
      <div className={classes.box}>
        <p className={classes.contacts}>Contact me</p>
        <ul className={classes.links}>
          <li>
            <a
              className={classes.link}
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <ion-icon
                class='social-icon'
                name='logo-facebook'
              ></ion-icon>
            </a>
          </li>
          <li>
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
          </li>
          <li>
            <a
              className={classes.link}
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <ion-icon
                class='social-icon'
                name='logo-linkedin'
              ></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
