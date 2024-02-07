import { redirect } from 'react-router-dom';

export function setAuthToken(data) {
  localStorage.setItem('token', data);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function tokenRemover() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  localStorage.removeItem('sb-qbobtqltrfhexlhwbjig-auth-token');
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    redirect('/login');
  }

  return null;
}

export function gerAuthUser() {
  const authUser = JSON.parse(localStorage.getItem('sb-qbobtqltrfhexlhwbjig-auth-token')).user;
  console.log(authUser.id);
  return authUser;
}