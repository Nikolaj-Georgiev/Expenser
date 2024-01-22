import Modal from '../UI/Modal';
import RegisterForm from '../components/RegisterForm';
import logoImg from '../assets/logo-circle.png';

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
