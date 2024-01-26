import { motion } from 'framer-motion';

import classes from './Hero.module.css';
import smallPigImage from '../../assets/logo-trans.png';
import bigPigImage from '../../assets/logo-trans-bigger.png';
import { HERO_BULLETS } from '../../util/config';

export default function Hero() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

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
              <motion.ul
                initial='hidden'
                animate='visible'
                variants={list}
                className={classes['hero-features-list']}
              >
                {HERO_BULLETS.map((bullet) => (
                  <motion.li
                    variants={list}
                    whileHover={{ scale: 1.1 }}
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
                  </motion.li>
                ))}
              </motion.ul>
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
