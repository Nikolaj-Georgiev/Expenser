import classes from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <section>
      <h2 className={classes.heading}>Dashboard</h2>
      <ul className={classes.list}>
        <li>Neshto 1</li>
        <li>Neshto 2</li>
        <li>Neshto 3</li>
        <li>Neshto 4</li>
      </ul>
    </section>
  );
}
