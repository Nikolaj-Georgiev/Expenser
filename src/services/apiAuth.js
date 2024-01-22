import supabase from "./supabase"

export async function login({ email, password }) {
  if (email.trim().length < 6 || password.trim().length < 6) {
    throw ({ message: 'Invalid input data provided.', status: 422 })
  }
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw new Error(error);
  }

  return data;
}

export async function signUp({ email, password, rePass }) {
  if (email.trim().length < 6 || password.trim().length < 6 || password.trim() !== rePass.trim()) {
    const error = new Error({ message: 'Invalid input data provided.', status: 422 })
    return error;
  }
  let { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    throw new Error(error.message);
  }


  return data;
}