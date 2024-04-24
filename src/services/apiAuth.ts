/* eslint-disable no-unused-vars */
import { setAuthToken } from '../util/auth';
import supabase from './supabase';

const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

export async function login({ email, password }) {
  if (!emailRegex.test(email) || email.trim().length < 6 || password.trim().length < 6) {
    throw ({ message: 'Invalid input data provided', status: 422 })
  }
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw ({ error_description: error.message, status: error.status });
  }
  setAuthToken(data.session.access_token);

  return data;
}

export async function signUp({ email, password, rePass }) {

  if (!emailRegex.test(email) || email.trim().length < 6 || password.trim().length < 6 || password.trim() !== rePass.trim()) {
    throw ({ message: 'Invalid input data provided', status: 422 })
  }
  let { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    throw ({ error_description: error.message, status: error.status, });
  }
  setAuthToken(data.session.access_token);

  return data;
}