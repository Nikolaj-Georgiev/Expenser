import classes from './Hero.module.css';
import smallPigImage from '../../assets/logo-trans.png';
import bigPigImage from '../../assets/logo-trans-bigger.png';

import { HERO_BULLETS } from '../../util/config';

export default function Hero() {
  return (
    <>
      <section
        className={classes['section-hero']}
        id='hero'
      >
        <div className={classes.hero}>
          <div className={classes['hero-text-box']}>
            <div>
              <h1 className={classes['heading-primary']}>
                {/* Money Matters: A Web App for Family Expense Management and
                Savings Goals */}
                Money Matters: A Web App for Family Expense Management
              </h1>
            </div>
            <div>
              <ul className={classes['hero-features-list']}>
                {HERO_BULLETS.map((bullet) => (
                  <li
                    key={bullet.id}
                    className={classes['hero-feature-item']}
                  >
                    <ion-icon
                      class={classes['hero-icon']}
                      name={bullet.icon}
                      size='large'
                    ></ion-icon>
                    <p className={classes['hero-feature-text']}>
                      {bullet.bulletText}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={classes['hero-img-box']}>
            <picture>
              <source
                srcSet={smallPigImage}
                type='image/png'
              />
              <source
                srcSet={bigPigImage}
                type='image/png'
              />

              <img
                src={bigPigImage}
                alt='Gold coin entering a piggy bank'
                className={classes['hero-img']}
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}