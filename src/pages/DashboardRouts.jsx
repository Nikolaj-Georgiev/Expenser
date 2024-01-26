import { useSubmit, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTokenDuration } from '../util/auth';
import Dashboard from '../components/dashboard/Dashboard';
import { loginActions } from '../store/auth-slice';
import { useCallback } from 'react';

export default function DashboardLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  const dispatch = useDispatch();

  const setToken = useCallback(
    (token) => {
      dispatch(loginActions.tokenFn(token));
    },
    [dispatch]
  );

  useEffect(() => {
    setToken(token);
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
  }, [token, submit, setToken]);

  return (
    <>
      <Dashboard />
    </>
  );
}
