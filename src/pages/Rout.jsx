/* eslint-disable no-unused-vars */
import Header from '../components/header/Header.jsx';
import MainNav from '../components/main-nav/MainNav.jsx';
import Footer from '../components/footer/Footer.jsx';

import { Outlet } from 'react-router-dom';

import classes from './Rout.module.css';

export default function RouterLayout() {
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
