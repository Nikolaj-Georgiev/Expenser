// import { redirect } from 'react-router-dom';
import { tokenRemover } from '../util/auth';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/auth-slice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
