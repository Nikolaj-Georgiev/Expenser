/* eslint-disable react-refresh/only-export-components */
import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Modal from '../UI/Modal';
import logoImg from '../assets/logo-circle.png';
import { signUp } from '../services/apiAuth';
import AuthForm from '../components/auth-form/AuthForm';
import { loginActions } from '../store/auth-slice';
import TextValidationMessage from '../UI/TextValidationMessage';

export default function RegisterPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const dispatch = useDispatch();
  function toggleAuthFormHandler(formMode) {
    dispatch(loginActions.toggle(formMode));
  }

  function handleLoginNavigate() {
    toggleAuthFormHandler('login');
    navigate('/login');
  }

  return (
    <Modal
      title='Register'
      logo={logoImg}
      alt='Image of a piggy bank'
    >
      {data && data.status && (
        <TextValidationMessage>{data.message}</TextValidationMessage>
      )}
      <AuthForm
        onNav={handleLoginNavigate}
        initialMode='register'
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
