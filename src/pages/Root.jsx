/* eslint-disable no-unused-vars */
import Header from '../components/Header.jsx';
import MainNav from '../components/MainNav.jsx';
import Footer from '../components/Footer.jsx';

import { Outlet } from 'react-router-dom';

import classes from './Root.module.css';

export default function RooterLayout() {
  return (
    <>
      <div className={classes.pancake}>
        <Header>
          <MainNav />
        </Header>
        <main className={classes.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
