const env = require('./env');
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || YOUR_CLOUD_NAME,
    api_key: process.env.API_KEY || YOUR_API_KEY,
    api_secret: process.env.API_SECRET || YOUR_API_SECRET,
});
