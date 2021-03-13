const fileToDataUri = (image) =>
  new Promise((res) => {
    const reader = new FileReader();
    const { type, name, size } = image;
    reader.addEventListener('load', () => {
      res({
        base64: reader.result,
        name,
        type,
        size,
      });
    });
    reader.readAsDataURL(image);
  });
export default fileToDataUri;
