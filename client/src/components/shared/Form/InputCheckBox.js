import React from 'react';
import styled, { keyframes } from 'styled-components';
import Constraints from './styles/Constraints';

function InputCheckBox({ id, name, label, reference, error, errorMsg }) {
  return (
    <CheckBoxWrapper>
      <Checkbox>
        <label htmlFor={id}>
          <InputCheckBoxStyle
            type="checkbox"
            id={id}
            name={name}
            aria-describedby={name}
            ref={reference}
            focus={error}
          />
          <CheckboxMaterial className="checkbox-material">
            <Check />
          </CheckboxMaterial>
          {label}
        </label>
      </Checkbox>
      <Constraints id={id}>{errorMsg}</Constraints>
    </CheckBoxWrapper>
  );
}

export default InputCheckBox;

const CheckBoxWrapper = styled.section`
  display: inline-flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 0.5rem 0;
  margin: 0;
  flex-wrap:wrap;
`;

const CheckboxOn = keyframes`
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px;
  }
  50% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px 2px 0 11px;
  }
  100% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px;
  }
  `;

const CheckboxOff = keyframes`
0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }

  25% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }
  50% {
    transform: rotate(45deg);
    margin-top: -4px;
    margin-left: 6px;
    width: 0px;
    height: 0px;
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px,
      0 0 0 0 inset;
  }
  51% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 10px inset;
  }
  100% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 0px inset;
  }

  `;

const RippleOn = keyframes`
0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
`;

const RippleOff = keyframes`
0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
`;

const Checkbox = styled.div`
  display: inline-block;
  padding: 0.3rem;
  transform: translateZ(0); // Force 3d rendering
  label {
    cursor: pointer;
    padding-left: 0; // Reset for Bootstrap rule
  }
`;

const CheckboxMaterial = styled.span`
  vertical-align: middle;
  position: relative;
  top: 0.1rem;
  left: -0.5rem;

  &:before {
    position: absolute;
    left: 8px;
    top: 2px;
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    height: 4px;
    width: 4px;
    border-radius: 100%;
    z-index: 1;
    opacity: 0;
    margin: 0;
    transform: scale3d(2.3, 2.3, 1);
  }
`;

const Check = styled.span`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: 0.1rem;
  overflow: hidden;
  z-index: 1;
  color: #0f58aa;
  :before {
    position: absolute;
    content: '';
    transform: rotate(45deg);
    display: block;
    margin-top: -4px;
    margin-left: 6px;
    width: 0;
    height: 0;
    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset;
    animation: ${CheckboxOff} 0.3s forwards ease-out;
  }
`;

const InputCheckBoxStyle = styled.input`
  &[type='checkbox'] {
    opacity: 0;
    position: absolute;
    margin: 0;
    z-index: -1;
    width: 0;
    height: 0;
    overflow: hidden;
    left: 0;
    pointer-events: none;
  }
  &[type='checkbox']:focus + span span:after {
    opacity: 0.2;
  }
  &[type='checkbox']:checked + span span:before {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px, -5px 5px 0 10px,
      20px -12px 0 11px;
    animation: ${CheckboxOn} 0.3s forwards ease-out;
  }
  &[type='checkbox']:not(:checked) + span:before {
    animation: ${RippleOff} 700ms forwards ease-out;
  }
  &[type='checkbox']:checked + span:before {
    animation: ${RippleOn} 700ms forwards ease-out;
  }
  &[type='checkbox']:not(:checked) + span span:after {
    animation: ${RippleOff} 700ms forwards ease-out;
  }
  &[type='checkbox']:checked + span span:after {
    animation: ${RippleOn} 700ms forwards ease-out;
  }
  &[type='checkbox'][disabled]:not(:checked) ~ span span:before,
  &[type='checkbox'][disabled] + .circle {
    opacity: 0.5;
  }
  &[type='checkbox'][disabled] + span span:after {
    background-color: rgba(0, 0, 0, 0.84);
    transform: rotate(-45deg);
  }
`;
