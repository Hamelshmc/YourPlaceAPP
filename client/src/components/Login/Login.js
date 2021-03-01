import React from 'react';
import InputForm from '../shared/Form/InputForm';
import InputPassword from '../shared/Form/InputPassword';
import Form from '../shared/Form/styles/Form';
import FormContainer from '../shared/Form/styles/FormContainer';
import FormTitle from '../shared/Form/styles/FormTitle';
import SubmitButton from '../shared/Form/styles/SubmitButton';

const Login = () => (
  <FormContainer>
    <Form>
      <FormTitle>Login</FormTitle>
      <InputForm
        id="email-login"
        name="Email"
        type="email"
        error=""
        placeholder="email@yopmail.com"
      />
      <InputPassword id="password-login" name="Password" error="" />
      <SubmitButton id="signin">Go</SubmitButton>
    </Form>
  </FormContainer>
);

export default Login;
