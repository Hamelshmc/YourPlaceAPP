import React from 'react';
import styled from 'styled-components';
import Slider from '../Slider/Slider';
import Constraints from './styles/Constraints';

function InputImage({ reference, previewSource, error, errorMsg }) {
  return (
    <div>
      <ButtonWrapper>
        <LabelUpload>Upload Image</LabelUpload>
        <InputUpload type="file" name="files[]" multiple ref={reference} focus={error} />
      </ButtonWrapper>

      {previewSource && <Slider slides={previewSource} />}
      <Constraints id="file">{errorMsg}</Constraints>
    </div>
  );
}

export default InputImage;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
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
