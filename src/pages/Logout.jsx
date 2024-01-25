import { redirect } from 'react-router-dom';
import { tokenRemover } from '../util/auth';

export default function Logout() {
  return;
}

export function action() {
  tokenRemover();
  return redirect('/login');
}
