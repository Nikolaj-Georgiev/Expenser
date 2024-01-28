import { CategoryFilter } from './CategoryFilter';
import classes from './Dashboard.module.css';
import TableView from './table/Table';

export default function Dashboard() {
  return (
    <section className={classes.dashboard}>
      <div className={classes.box}>
        <CategoryFilter />
        <div>
          {/* <h2 className={classes.heading}>Total Expenses</h2> */}
          <TableView />
        </div>
      </div>
    </section>
  );
}
