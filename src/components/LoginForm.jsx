import { useNavigate } from 'react-router';
import { Form } from 'react-router-dom';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './LoginForm.module.css';
import logoImg from '../assets/logo-circle.png';

export default function LoginForm() {
  const navigate = useNavigate();

  function handleNavigateToRegister() {
    return navigate('/register');
  }

  function handleSubmit() {}

  return (
    <Modal
      title='Login bate'
      logo={logoImg}
      alt='Image of a piggy bank'
    >
      <Form
        action='/'
        method='post'
        className={classes.form}
      >
        <div className={classes.fields}>
          <label htmlFor='email'>email</label>
          <input
            id='email'
            type='email'
            name='email'
            required
            autoComplete='email'
            placeholder='example@example.com'
            className={classes.input}
          />
        </div>
        <div className={classes.fields}>
          <label htmlFor='password'>password</label>
          <input
            id='password'
            type='password'
            name='password'
            required
            autoComplete='password'
            placeholder='your password &#129058; minimum 6 chars'
            minLength={6}
            className={classes.input}
          />
        </div>
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
