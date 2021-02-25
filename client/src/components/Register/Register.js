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

const Register = () => (
  <FormContainer>
    <Form action="#" method="POST">
      <FormTitle>Join us!</FormTitle>
      <InputSection>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder=" "
          autocomplete="username"
          required
        />
      </InputSection>
      <InputSection>
        <InputLabel htmlFor="current-password">Password</InputLabel>
        <Input
          id="current-password"
          name="current-password"
          type="password"
          autocomplete="current-password"
          aria-describedby="password-constraints"
          required
        />
        <TogglePassword
          id="toggle-password"
          type="button"
          aria-label="Show password as plain text. Warning: this will display your password on the screen.">
          Show password
        </TogglePassword>
      </InputSection>
      <InputSection>
        <InputLabel htmlFor="confirm-password">Password confirm</InputLabel>
        <Input
          id="confirm-password"
          name="confirm-password"
          type="password"
          autocomplete="confirm-password"
          aria-describedby="password-constraints"
          required
        />
        <TogglePassword
          id="toggle-password"
          type="button"
          aria-label="Show password as plain text. Warning: this will display your password on the screen.">
          Show password
        </TogglePassword>
        <Constraints id="password-constraints">
          Eight or more characters, with at least one&nbsp;lowercase and one uppercase letter.
        </Constraints>
      </InputSection>
      <SubmitButton id="signin">Join our community</SubmitButton>
    </Form>
  </FormContainer>
);

export default Register;
