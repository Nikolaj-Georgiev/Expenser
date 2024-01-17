import { useNavigate } from 'react-router';
import { Form } from 'react-router-dom';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './LoginPage.module.css';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleNavigateToRegister() {
    return navigate('/register');
  }

  function handleSubmit() {}

  return (
    <Modal
      title='Login bate'
      // onClose={handleClose}
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
        <div className={classes.box}>
          <Button
            isText={true}
            onClick={handleNavigateToRegister}
          >
            No account? Register!
          </Button>
          <Button
            isCta={true}
            onSubmit={handleSubmit}
          >
            Login
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
