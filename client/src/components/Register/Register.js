import React from 'react';
import InputForm from '../shared/Form/InputForm';
import InputPassword from '../shared/Form/InputPassword';
import Form from '../shared/Form/styles/Form';
import FormContainer from '../shared/Form/styles/FormContainer';
import FormTitle from '../shared/Form/styles/FormTitle';
import SubmitButton from '../shared/Form/styles/SubmitButton';

const Register = () => (
  <FormContainer>
    <Form action="#" method="POST">
      <FormTitle>Join us!</FormTitle>
      <InputForm
        id="email-register"
        name="Email"
        type="email"
        error=""
        placeholder="email@yopmail.com"
      />
      <InputPassword id="password-current" name="Password" error="" />
      <InputPassword id="password-confirm" name="Password Confirm" error="" />
      <SubmitButton id="register">Join our community</SubmitButton>
    </Form>
  </FormContainer>
);

export default Register;