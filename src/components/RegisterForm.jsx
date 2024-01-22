import { Form } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './RegisterForm.module.css';

export default function RegisterForm({ onCancel, submitting, onNav }) {
  return (
    <Form
      action='/register'
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
      <div className={classes.fields}>
        <label htmlFor='password'>repeat password</label>
        <input
          id='re-password'
          type='password'
          name='re-password'
          required
          autoComplete='password'
          placeholder='repeat your password'
          minLength={6}
          className={classes.input}
        />
      </div>
      <div className={classes.box}>
        <Button
          isCta={true}
          moreCss={classes.action}
        >
          Register
        </Button>
        <Button
          type='button'
          isText={true}
          onClick={onNav}
          moreCss={classes.redirect}
        >
          Have an account? Login!
        </Button>
        <Button
          type='button'
          isText={true}
          onClick={onCancel}
          moreCss={classes.cancel}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
}
