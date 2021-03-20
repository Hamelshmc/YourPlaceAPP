const url = 'http://localhost:3000/api/v1/publications/image';
const form = document.querySelector('form');
const image = 'hackaboss_t6dzcm';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const { files } = document.querySelector('[type=file]');

  const image = {
    data: [],
  };

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileBase64 = await readFileAsync(file);
    image.data.push({ data: fileBase64 });
  }
  await uploadImage(image);
});

const uploadImage = async (base64EncodedImage) => {
  try {
    await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ ...base64EncodedImage }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((data) => {
        /* console.log(JSON.parse(data)); */
        document.getElementById('data').innerHTML += JSON.parse(data);
      });
  } catch (err) {
    console.error(err);
  }
};

const readFileAsync = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
