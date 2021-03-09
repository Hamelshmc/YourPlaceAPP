require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const optionsImage = Object.freeze({
  overlay: 'yourplace_logo_baqyds',
  gravity: 'south_east',
  height: 100,
  opacity: 70,
  quality: 'auto',
  upload_preset: 'YourPlace_IMG',
});

module.exports = { cloudinary, optionsImage };
