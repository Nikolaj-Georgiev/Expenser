import { useSubmit, useLoaderData, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import classes from './DashboardRouts.module.css';
import Header from '../components/header/Header';
import MainNav from '../components/main-nav/MainNav';
import { getTokenDuration } from '../util/auth';

export default function DashboardLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    const timer = setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);

    return () => clearTimeout(timer);
  }, [token, submit]);

  return (
    <>
      <div className={classes.pancake}>
        <Header>
          <MainNav token={token} />
        </Header>
        <main className={classes.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
