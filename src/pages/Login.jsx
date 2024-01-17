import { useNavigate } from 'react-router';
import { Form } from 'react-router-dom';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

export default function Login() {
  const navigate = useNavigate();

  function handleClose() {
    return navigate('/');
  }

  function handleSubmit() {}

  return (
    <Modal
      title='Login bate'
      onClose={handleClose}
    >
      <Form
        action='/'
        method='post'
      >
        <fieldset>
          <label htmlFor='email'>Your email address</label>
          <input
            id='email'
            type='email'
            name='email'
            required
            autoComplete='email'
            placeholder='example@example.com'
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Your email address</label>
          <input
            id='password'
            type='password'
            name='password'
            required
            autoComplete='password'
            placeholder='your password, minimum 6 chars'
            minLength={6}
          />
        </fieldset>
        <Button
          isText={true}
          onClick={() => {
            navigate('/register');
          }}
        >
          No account? Register
        </Button>
        <Button
          isCta={true}
          onSubmit={handleSubmit}
        >
          Login
        </Button>
      </Form>
    </Modal>
  );
}
