import classes from './Dashboard.module.css';
import TableView from './table/Table';

export default function Dashboard() {
  return (
    <section className={classes.dashboard}>
      <div className={classes.box}>
        <aside>
          <ul className={classes.list}>
            <li>Neshto 1</li>
            <li>Neshto 2</li>
            <li>Neshto 3</li>
            <li>Neshto 4</li>
          </ul>
        </aside>
        <div>
          {/* <h2 className={classes.heading}>Total Expenses</h2> */}
          <TableView />
        </div>
      </div>
    </section>
  );
}
