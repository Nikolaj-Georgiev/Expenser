import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import classes from './CategoryFilter.module.css';
import expensesImg from '../../assets/expenses-images/expenses.webp';
import savingsImg from '../../assets/savings-images/saving.webp';
import { dashboardActions } from '../../store/dashboard-slice';

const categoryVariants = {
  initial: {
    y: 0,
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
};

export function CategoryFilter({ setCurrentCategory }) {
  const dispatch = useDispatch();
  function handleChangeCatType(type) {
    dispatch(dashboardActions.toggleCatTypes(type));
    dispatch(dashboardActions.getCatTypesData(type));
  }
  const catType = useSelector((state) => state.dashboard.catTypes);
  console.log(catType);
  const currentData = useSelector((state) => state.dashboard.catTypesData);
  console.log(currentData);
  return (
    <aside className={classes.aside}>
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
        <ul className={classes.list}>
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
          {currentData.map((cat) => (
            <motion.li
              variants={categoryVariants}
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
                // onClick={() => setCurrentCategory(cat.name)}
              >
                {cat.name.toUpperCase()}
              </button>
            </motion.li>
          ))}
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
        </ul>
      </motion.div>
    </aside>
  );
}
