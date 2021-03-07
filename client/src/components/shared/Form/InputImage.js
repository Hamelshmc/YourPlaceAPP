import React from 'react';
import Constraints from './styles/Constraints';

function InputImage({ reference, previewSource }) {
  return (
    <div>
      <div>
        <input type="file" name="files[]" multiple ref={reference} />
        <label>Image</label>
      </div>
      {previewSource &&
        previewSource.map((item) => (
          <img src={item.url} key={item.url} alt="chosen" style={{ height: '300px' }} />
        ))}
      <Constraints />
    </div>
  );
}

export default InputImage;
