/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './LoginForm.module.css';

export default function LoginForm({ onCancel, submitting, isInvalid }) {
  return (
    <Form
      action='/login'
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
          type='button'
          isText={true}
          onClick={onCancel}
          disabled={submitting}
        >
          No account? Register!
        </Button>
        <Button
          isCta={true}
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Login'}
        </Button>
      </div>
    </Form>
  );
}
