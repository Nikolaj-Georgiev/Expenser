import Modal from '../UI/Modal';
import RegisterForm from '../components/RegisterForm';
import logoImg from '../assets/logo-circle.png';
import { signUp } from '../services/apiAuth';
import { redirect } from 'react-router-dom';

export default function Register() {
  return (
    <Modal
      title='Register'
      logo={logoImg}
      alt='Image of a piggy bank'
    >
      <RegisterForm />
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
    rePass: formData.get('re-password'),
  };

  try {
    const data = await signUp(user);
    if (data.status) {
      const err = new Error({ data });
      throw err; //bullshit...fix it!
    }
  } catch (error) {
    if (error.status === 422) {
      throw error;
    }

    throw error;
  }

  return redirect('/dashboard');
}
