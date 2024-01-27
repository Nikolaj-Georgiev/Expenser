// import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { tokenRemover } from '../util/auth';
import { loginActions } from '../store/auth-slice';

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    tokenRemover();
    dispatch(loginActions.logout());
    navigate('/');
  }, [dispatch, navigate]);
}

// export function action() {

//   tokenRemover();
//   return redirect('/');
// }
