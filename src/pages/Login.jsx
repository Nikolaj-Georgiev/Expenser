import LoginForm from '../components/LoginForm';
import logoImg from '../assets/logo-circle.png';
import Modal from '../UI/Modal';

export default function Login() {
  return (
    <Modal
      title='Login'
      logo={logoImg}
      alt='Image of a piggy bank'
    >
      <LoginForm />;
    </Modal>
  );
}
