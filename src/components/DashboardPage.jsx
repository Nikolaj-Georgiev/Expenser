import classes from './DashboardPage.module.css';

export default function DashboardPage() {
  return (
    <>
      <h1 className={classes.heading}>Dashboard</h1>
      <ul className={classes.list}>
        <li>Neshto 1</li>
        <li>Neshto 2</li>
        <li>Neshto 3</li>
        <li>Neshto 4</li>
      </ul>
    </>
  );
}
