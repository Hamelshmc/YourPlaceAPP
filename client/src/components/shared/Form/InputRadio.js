import React from 'react';
import styled, { keyframes } from 'styled-components';
import Constraints from './styles/Constraints';

function InputRadio({
  idFirst,
  idSecond,
  name,
  labelFirst,
  labelSecond,
  reference,
  error,
  errorMsg,
}) {
  return (
    <div>
      <InputRadioContainer>
        <RadioLabel className="radio" htmlFor={idFirst}>
          <InputTypeRadio
            type="radio"
            id={idFirst}
            value={idFirst}
            name={name}
            aria-describedby={name}
            ref={reference}
            focus={error}
          />
          <Radio />
          {labelFirst}
        </RadioLabel>
        <RadioLabel className="radio" htmlFor={idSecond}>
          <InputTypeRadio
            type="radio"
            id={idSecond}
            value={idSecond}
            name={name}
            aria-describedby={name}
            ref={reference}
            focus={error}
          />
          <Radio />
          {labelSecond}
        </RadioLabel>
      </InputRadioContainer>
      <Constraints id={name}>{errorMsg}</Constraints>
    </div>
  );
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const FadeOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }

`;

const BlinkBorder = keyframes`
  0% {
    border : 1px solid $border;
  }
  50% {
    border : 1px solid $color;
  }
  100% {
    border : 1px solid $border;
  }
`;

const InputRadioContainer = styled.section`
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 1rem;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  transition: all 0.3s;
  padding: 0 1rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  input[type='radio']:not(:checked) + div:after {
    transition: all 0.3s;
    animation: ${FadeOut} 0.3s;
    content: '';
    margin: auto;
    display: block;
    opacity: 0;
    background: #0f58aa;
    margin-top: 2px;
    margin-left: 2px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
  &:hover {
    input[type='radio']:not(:checked) + div:after {
      transition: all 0.3s;
      animation: ${FadeIn} 0.3s;
      content: '';
      opacity: 1;
      display: block;
      background: #0f58aa;
      margin-top: 2px;
      margin-left: 2px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }
  }
`;

const Radio = styled.div`
  display: inline-block;
  vertical-align: bottom;
  border: 1px solid #e0e5eb;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 0.5rem;
  &:after {
    content: '';
    display: block;
    background: transparent;
    margin-top: 2px;
    margin-left: 2px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
`;

const InputTypeRadio = styled.input`
  &[type='radio'] {
    display: none;

    &:checked + div {
      animation: ${BlinkBorder} 0.5s;
      &:after {
        content: '';
        display: block;
        margin-top: 2px;
        margin-left: 2px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #0f58aa;
      }
    }
  }
`;

export default InputRadio;
