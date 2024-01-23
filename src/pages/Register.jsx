import Modal from '../UI/Modal';
import RegisterForm from '../components/RegisterForm';
import logoImg from '../assets/logo-circle.png';
import { signUp } from '../services/apiAuth';
import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Register() {
  const data = useActionData();
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
