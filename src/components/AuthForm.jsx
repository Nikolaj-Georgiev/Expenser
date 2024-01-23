/* eslint-disable react/prop-types */
import { Form } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../UI/Button';
import { MiniLoader } from '../UI/MiniLoader';
import classes from './AuthForm.module.css';

export default function AuthForm({ onCancel, submitting, onNav, initialMode }) {
  const modeSelector = useSelector((state) => state.authForm);
  const mode = modeSelector.formMode ?? initialMode;

  const submitName = `${mode.slice(0, 1).toUpperCase()}${mode.slice(1)}`;
  const navigateName =
    mode === 'login' ? 'No account? Register!' : 'Have an account? Login!';

  return (
    <Form
      action={`/${mode}`}
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
      {mode === 'register' && (
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
      )}

      <div className={classes.box}>
        <Button
          isCta={true}
          moreCss={classes.action}
          disabled={submitting}
        >
          {submitting ? <MiniLoader /> : submitName}
        </Button>
        <Button
          type='button'
          isText={true}
          onClick={onNav}
          disabled={submitting}
          moreCss={classes.redirect}
        >
          {navigateName}
        </Button>
        <Button
          type='button'
          isText={true}
          onClick={onCancel}
          disabled={submitting}
          moreCss={classes.cancel}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
}
