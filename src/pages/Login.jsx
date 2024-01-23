import logoImg from '../assets/logo-circle.png';
import Modal from '../UI/Modal';
import { login } from '../services/apiAuth.js';
import AuthForm from '../components/AuthForm.jsx';
import { loginActions } from '../store/auth-form-slice.js';

import { motion } from 'framer-motion';
import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const dispatch = useDispatch();
  function toggleAuthFormHandler(formMode) {
    dispatch(loginActions.toggle(formMode));
  }

  function handleRegisterNavigate() {
    toggleAuthFormHandler('register');
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
      {data && data.status && (
        <motion.p
          style={{
            y: -100,
            color: '#F7CD08',
            fontSize: '1.8rem',
            fontWeight: 500,
            textTransform: 'uppercase',
          }}
          animate={{
            y: 0,
            transition: { type: 'spring' },
          }}
          whileHover={{ scaleX: 1.3 }}
        >
          {data.message}
        </motion.p>
      )}
      <AuthForm
        onCancel={handleCancel}
        submitting={navigation.state === 'submitting'}
        initialMode='login'
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
  } catch (err) {
    if (err.status === 422) {
      return err;
    }

    throw err;
  }
  return redirect('/dashboard');
}
