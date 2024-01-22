/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './LoginForm.module.css';
import { MiniLoader } from '../UI/MiniLoader';

export default function LoginForm({ onCancel, submitting, isInvalid, onNav }) {
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
          isCta={true}
          disabled={submitting}
          moreCss={classes.action}
        >
          {submitting ? <MiniLoader /> : 'Login'}
        </Button>
        <Button
          type='button'
          isText={true}
          onClick={onNav}
          disabled={submitting}
          moreCss={classes.navigate}
        >
          No account? Register!
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
