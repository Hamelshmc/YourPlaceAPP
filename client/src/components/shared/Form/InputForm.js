import React from 'react';
import Constraints from './styles/Constraints';
import Input from './styles/Input';
import InputLabel from './styles/InputLabel';
import InputSection from './styles/InputSection';

function InputForm({ id, name, label, type, errorMsg, error, placeholder, reference }) {
  return (
    <div>
      <InputSection>
        <Input
          id={id}
          name={name}
          type={type}
          aria-describedby={name}
          autoComplete="on"
          placeholder={placeholder}
          ref={reference}
          focus={error}
        />
        <InputLabel htmlFor={id}>{label}</InputLabel>
      </InputSection>
      <Constraints id={id}>{errorMsg}</Constraints>
    </div>
  );
}

export default InputForm;
