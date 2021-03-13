import React from 'react';
import styled from 'styled-components';
import Slider from '../Slider/Slider';
import Constraints from './styles/Constraints';

function InputImage({
  id = 'files',
  name = 'files',
  label = 'Upload Image',
  reference,
  previewSource,
  error,
  errorMsg,
  required = true,
}) {
  return (
    <InputImageContainer>
      <ButtonWrapper>
        <LabelUpload>{error ? errorMsg : label}</LabelUpload>
        <InputUpload
          type="file"
          id={id}
          name={name}
          multiple
          ref={reference}
          focus={error}
          required={required}
        />
      </ButtonWrapper>
      <Constraints id="file">{errorMsg}</Constraints>
      {previewSource && <Slider slides={previewSource} />}
    </InputImageContainer>
  );
}

export default InputImage;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin-bottom: 0.5rem;
`;

const LabelUpload = styled.label`
  position: relative;
  z-index: 0;
  display: inline-block;
  width: 100%;
  background: #1d9cdb;
  cursor: pointer;
  color: #fff;
  padding: 0.5rem 0;
  border-radius: 0.2rem;
  text-transform: uppercase;
`;

const InputUpload = styled.input`
  display: inline-block;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

const InputImageContainer = styled.div`
  width: 100%;
`;
