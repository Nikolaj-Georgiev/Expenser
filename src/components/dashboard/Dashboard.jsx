import { useSelector } from 'react-redux';
import { CategoryFilter } from './CategoryFilter';
import classes from './Dashboard.module.css';
import TableView from './table/Table';
import { EXPENSES_MOCK, SAVINGS_MOCK } from '../../util/config';

export default function Dashboard() {
  const catType = useSelector((state) => state.dashboard.catTypes);
  const currentData = catType === 'savings' ? SAVINGS_MOCK : EXPENSES_MOCK; // mock data to check the logic and the styling
  return (
    <section className={classes.dashboard}>
      <div className={classes.box}>
        <CategoryFilter />
        <div>
          {/* <h2 className={classes.heading}>Total Expenses</h2> */}
          <TableView
            data={currentData}
            catType={catType}
          />
        </div>
      </div>
    </section>
  );
}
