const crypto = require('crypto');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'jonascoder',
    api_key: '299518669231946',
    api_secret: process.env.CLOUDINARY_SECRET
});
const cloudinaryStorage = require('multer-storage-cloudinary');
const storage = cloudinaryStorage({
    cloudinary,
    folder: 'surf-shop',
    allowedFormats: ['jpeg', 'jpg', 'png', 'svg'],
    filename: function(req, file, cb) {
        let buf = crypto.randomBytes(16);
        buf = buf.toString('hex');
        let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png|\.svg/ig, '');
        uniqFileName += buf;
        cb(undefined, uniqFileName);
    }
});

module.exports = {
    cloudinary,
    storage
}