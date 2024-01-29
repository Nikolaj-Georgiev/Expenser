import { CATEGORIES } from '../../util/config';
import { motion } from 'framer-motion';
import classes from './CategoryFilter.module.css';
import expensesImg from '../../assets/expenses-images/expenses.webp';

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

const items = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export function CategoryFilter({ setCurrentCategory }) {
  return (
    <aside className={classes.aside}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={list}
        className={classes.box}
      >
        <motion.img
          variants={items}
          className={classes.img}
          src={expensesImg}
        />

        <ul className={classes.list}>
          <motion.li
            key='All expenses'
            variants={items}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={classes.listItem}
          >
            <button
              className={classes.categoryButtonAll}
              onClick={() => setCurrentCategory('all')}
            >
              All expenses
            </button>
          </motion.li>
          {CATEGORIES.map((cat) => (
            <motion.li
              variants={items}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={cat.name}
              className={classes.listItem}
            >
              <img
                className={classes.catImage}
                src={cat.image}
              />
              <button
                className={classes.categoryButton}
                onClick={() => setCurrentCategory(cat.name)}
              >
                {cat.name.toUpperCase()}
              </button>
            </motion.li>
          ))}
          <motion.li
            key='to savings'
            variants={items}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${classes.listItem} ${classes.switchTo}`}
          >
            <button
              className={classes.categoryButtonAll}
              onClick={() => setCurrentCategory('all')}
            >
              Savings
            </button>
          </motion.li>
        </ul>
      </motion.div>
    </aside>
  );
}
