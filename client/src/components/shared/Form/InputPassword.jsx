import React, { useState } from 'react';
import Icon from '../Icon';
import Constraints from './styles/Constraints';
import Input from './styles/Input';
import InputLabel from './styles/InputLabel';
import InputSection from './styles/InputSection';
import TogglePassword from './styles/TogglePassword';

function InputPassword({ id, name, label, placeholder, errorMsg, error, reference }) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <InputSection>
        <Input
          id={id}
          name={name}
          autoComplete="on"
          aria-describedby={id}
          required
          type={passwordShown ? 'text' : 'password'}
          ref={reference}
          focus={error}
          placeholder={placeholder}
        />
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <TogglePassword
          onClick={togglePasswordVisiblity}
          type="button"
          aria-label="Show password as plain text. Warning: this will display your password on the screen.">
          <Icon>{passwordShown ? 'visibility' : 'visibility_off'}</Icon>
        </TogglePassword>
      </InputSection>
      <Constraints id={id}>{errorMsg}</Constraints>
    </div>
  );
}

export default InputPassword;
