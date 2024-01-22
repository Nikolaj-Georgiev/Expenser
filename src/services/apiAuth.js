import supabase from "./supabase"

export async function login({ email, password }) {
  console.log('opa opa');
  if (email.trim().length < 6 || password.trim().length < 6) {
    const error = new Error({ message: 'Invalid input data provided.', status: 422 })
    return error;
  }
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw new Error(error.message);
  }


  return data;
}

