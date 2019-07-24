import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required Email'),
  password: Yup.string().required('Required Password'),
});

// import { Container } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter Your Email" />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
        />

        <button type="submit">Login</button>
        <Link to="/register">Register Now!</Link>
      </Form>
    </>
  );
}
