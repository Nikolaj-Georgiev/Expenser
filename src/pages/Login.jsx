import { useNavigate, Form } from 'react-router';
import Modal from '../UI/Modal';

export default function Login() {
  const navigate = useNavigate();
  function handleClose() {
    return navigate('/');
  }

  return (
    <Modal
      title='Login bate'
      onClose={handleClose}
    >
      <p>Opa opa</p>
      <button onClick={handleClose}>Okay</button>
    </Modal>
  );
}
