import LoginForm from '../components/LoginForm';
import logoImg from '../assets/logo-circle.png';
import Modal from '../UI/Modal';
import { login } from '../services/apiAuth.js';

import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

function LoginPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  function handleRegisterNavigate() {
    navigate('/register');
  }

  function handleCancel() {
    navigate('/');
  }

  return (
    <Modal
      title='Login'
      logo={logoImg}
      alt='Image of a piggy bank'
    >
      <LoginForm
        onCancel={handleCancel}
        submitting={navigation.state === 'submitting'}
        isInvalid={(data && data.status && true) || false}
        onNav={handleRegisterNavigate}
      />
    </Modal>
  );
}

export default LoginPage;

export async function action({ request }) {
  const formData = await request.formData();
  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    await login(user);
  } catch (error) {
    if (error.status === 422) {
      throw error;
    }

    throw error;
  }

  return redirect('/dashboard');
}
