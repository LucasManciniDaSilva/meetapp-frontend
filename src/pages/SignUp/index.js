import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Required Name'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Required Email'),
  password: Yup.string()
    .min(6, 'password need at least 6 characters')
    .required('Required Password'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Enter Your Full Name" />
        <Input name="email" type="email" placeholder="Enter Your Email" />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
        />

        <button type="submit">Register</button>
        <Link to="/">I already have an account!</Link>
      </Form>
    </>
  );
}
