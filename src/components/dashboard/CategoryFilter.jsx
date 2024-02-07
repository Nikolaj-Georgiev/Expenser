import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import classes from './CategoryFilter.module.css';
import expensesImg from '../../assets/expenses-images/expenses.webp';
import savingsImg from '../../assets/savings-images/saving.webp';
import { dashboardActions } from '../../store/dashboard-slice';
import { gerAuthUser } from '../../util/auth';
import { getSavings, getSavingsTypes } from '../../services/apiDataFetching';

const categoryVariants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      staggerChildren: 0.15,
      when: 'afterChildren',
    },
  },
};

export function CategoryFilter({ setCurrentCategory }) {
  const dispatch = useDispatch();
  function handleChangeCatType(type) {
    dispatch(dashboardActions.toggleCatTypes(type));
    dispatch(dashboardActions.getCatTypesData(type));
  }
  const catType = useSelector((state) => state.dashboard.catTypes);
  const currentData = useSelector((state) => state.dashboard.catTypesData);
  return (
    <aside className={classes.aside}>
      <AnimatePresence mode='wait'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={categoryVariants}
          className={classes.box}
          layout
        >
          <img
            className={classes.img}
            src={catType === 'expenses' ? expensesImg : savingsImg}
          />
          <motion.ul
            className={classes.list}
            variants={categoryVariants}
            // animate='animate'
          >
            <motion.li
              key={`All ${catType}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={classes.listItem}
            >
              <button
                className={classes.categoryButtonAll}
                // onClick={() => setCurrentCategory('all')}
              >
                {`All ${catType}`}
              </button>
            </motion.li>
            <AnimatePresence mode='wait'>
              {currentData.map((cat) => (
                <motion.li
                  variants={categoryVariants}
                  exit={{
                    y: 20,
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={cat.created_at}
                  className={classes.listItem}
                >
                  <img
                    className={classes.catImage}
                    src={cat.image}
                  />
                  <button
                    onClick={getSavingsTypes}
                    className={classes.categoryButton}
                    // onClick={() => setCurrentCategory(cat.name)}
                  >
                    {cat.name.toUpperCase()}
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
            <motion.li
              key={`to ${catType}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`${classes.listItem} ${classes.switchTo}`}
            >
              <button
                className={classes.categoryButtonAll}
                onClick={() =>
                  handleChangeCatType(
                    catType === 'expenses' ? 'savings' : 'expenses'
                  )
                }
              >
                {`${catType.slice(0, 1).toUpperCase()}${catType.slice(1)}`}
              </button>
            </motion.li>
          </motion.ul>
        </motion.div>
      </AnimatePresence>
    </aside>
  );
}
