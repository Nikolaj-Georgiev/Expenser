import { motion } from 'framer-motion';

import classes from './Hero.module.css';
// import smallPigImage from '../../assets/logo-trans.png';
import smallPigImage from '../../assets/logo-trans-webp.webp';
// import bigPigImage from '../../assets/logo-trans-bigger.png';
import { HERO_BULLETS } from '../../util/config';

export default function Hero() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const elements = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' },
    },
    hidden: {
      opacity: 0,
      y: -300,
    },
  };

  return (
    <>
      <section
        className={classes['section-hero']}
        id='hero'
      >
        <motion.div
          className={classes.hero}
          initial='hidden'
          whileInView='visible'
          variants={list}
        >
          <div className={classes['hero-text-box']}>
            <div>
              <motion.h1
                className={classes['heading-primary']}
                variants={elements}
              >
                {/* Money Matters: A Web App for Family Expense Management and
                Savings Goals */}
                Money Matters: A Web App for Family Expense Management
              </motion.h1>
            </div>
            <div>
              <ul className={classes['hero-features-list']}>
                {HERO_BULLETS.map((bullet) => (
                  <motion.li
                    variants={elements}
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
              </ul>
            </div>
          </div>
          <motion.div
            className={classes['hero-img-box']}
            variants={elements}
          >
            <img
              src={smallPigImage}
              alt='Gold coin entering a piggy bank'
              className={classes['hero-img']}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

{
  /* <picture>
      <source
        srcSet={smallPigImage}
        type='image/png'
      />
      <source
        srcSet={bigPigImage}
        type='image/png'
      /> 
      <img
      src={smallPigImage}
      alt='Gold coin entering a piggy bank'
      className={classes['hero-img']}
    />
  </picture>*/
}
