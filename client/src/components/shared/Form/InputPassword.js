import React, { useState } from 'react';
import Icon from '../Icon';
import Constraints from './styles/Constraints';
import Input from './styles/Input';
import InputLabel from './styles/InputLabel';
import InputSection from './styles/InputSection';
import TogglePassword from './styles/TogglePassword';

function InputPassword({ id, name, error, setPasswordSecondShown }) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <InputSection>
        <InputLabel htmlFor={id}>{name}</InputLabel>
        <Input
          id={id}
          name={id}
          autoComplete="on"
          aria-describedby={id}
          required
          type={passwordShown ? 'text' : 'password'}
        />
        <TogglePassword
          onClick={togglePasswordVisiblity}
          type="button"
          aria-label="Show password as plain text. Warning: this will display your password on the screen.">
          <Icon>{passwordShown ? 'visibility' : 'visibility_off'}</Icon>
        </TogglePassword>
      </InputSection>
      <Constraints id={id}>{error}</Constraints>
    </div>
  );
}

export default InputPassword;
