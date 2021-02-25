import React from 'react';
import { Constraints } from '../shared/Form/Constraints';
import { Form } from '../shared/Form/Form';
import { FormContainer } from '../shared/Form/FormContainer';
import { FormTitle } from '../shared/Form/FormTitle';
import { Input } from '../shared/Form/Input';
import { InputLabel } from '../shared/Form/InputLabel';
import { InputSection } from '../shared/Form/InputSection';
import { SubmitButton } from '../shared/Form/SubmitButton';
import { TogglePassword } from '../shared/Form/TogglePassword';

const Login = () => (
  <FormContainer>
    <Form action="#" method="POST">
      <FormTitle>Login</FormTitle>
      <InputSection>
        <InputLabel htmlFor="loginEmail">Email</InputLabel>
        <Input
          id="loginEmail"
          name="loginEmail"
          type="email"
          placeholder=" "
          autocomplete="username"
          required
        />
      </InputSection>
      <InputSection>
        <InputLabel htmlFor="login-password">Password</InputLabel>
        <Input
          id="login-password"
          name="login-password"
          type="password"
          autocomplete="current-password"
          aria-describedby="password-constraints"
          required
        />
        <TogglePassword
          id="toggle-password-login"
          type="button"
          aria-label="Show password as plain text. Warning: this will display your password on the screen.">
          Show password
        </TogglePassword>
        <Constraints id="password-constraints-login">
          Eight or more characters, with at least one&nbsp;lowercase and one uppercase letter.
        </Constraints>
      </InputSection>
      <SubmitButton id="signin">Go</SubmitButton>
    </Form>
  </FormContainer>
);

export default Login;
