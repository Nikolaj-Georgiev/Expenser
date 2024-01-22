import Modal from '../UI/Modal';
import RegisterForm from '../components/RegisterForm';
import logoImg from '../assets/logo-circle.png';
import { signUp } from '../services/apiAuth';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const navigation = useNavigation();

  function handleLoginNavigate() {
    navigate('/login');
  }

  function handleCancel() {
    navigate('/');
  }

  return (
    <Modal
      title='Register'
      logo={logoImg}
      alt='Image of a piggy bank'
    >
      <RegisterForm
        onNav={handleLoginNavigate}
        onCancel={handleCancel}
        submitting={navigation.state === 'submitting'}
      />
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
    await signUp(user);
  } catch (err) {
    if (err.status === 422) {
      return err;
    }
    throw err;
  }

  return redirect('/dashboard');
}
