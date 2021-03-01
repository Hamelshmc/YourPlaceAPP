import React from 'react';
import Constraints from './styles/Constraints';
import Input from './styles/Input';
import InputLabel from './styles/InputLabel';
import InputSection from './styles/InputSection';

function InputForm({ id, name, type, error, placeholder }) {
  return (
    <div>
      <InputSection>
        <InputLabel htmlFor={id}>{name}</InputLabel>
        <Input
          id={id}
          name={name}
          type={type}
          aria-describedby={name}
          required
          autoComplete="on"
          placeholder={placeholder}
        />
      </InputSection>
      <Constraints id={id}>{error}</Constraints>
    </div>
  );
}

export default InputForm;
