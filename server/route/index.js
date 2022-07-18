const express = require("express");
const router = express.Router();
const File = require("../controller/File");
const multer = require("multer");
const cloudinary = require('cloudinary');
const config = require('../config/env');
const path = require('path');

cloudinary.config({
    cloud_name: config.CLOUD_NAME,
    api_key: config.API_KEY,
    api_secret: config.API_SECRET
})

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|docx|doc|msword|rtf|zip|rar|pdf|txt)$/i)) {
        return cb('Only image files are allowed', false)
    }
    else {
        cb(null, true)
    }
}
const upload = multer({
    storage: storage,
    limits: { 
        fileSize: 10 * 1024 * 1024, 
    },
    fileFilter: fileFilter
})

//const upload = multer({ dest: "uploads" });

router.post("/upload", upload.single("file"), File.uploadFile);
router.get("/file/:fileId", File.downloadFile);
router.post("/file/:fileId", File.downloadFile);
router.get("/file/single/:fileId", File.getFile);
router.put("/file/update/:fileId", upload.single("file"), File.updateFile);
router.delete("/file/delete/:fileId", File.deleteFile);

//...

router.post("/video/upload", async (req, res) => {
    // Get the file name and extension with multer
    const storage = multer.diskStorage({
      filename: (req, file, cb) => {
        const fileExt = file.originalname.split(".").pop();
        const filename = `${new Date().getTime()}.${fileExt}`;
        cb(null, filename);
      },
    });
  
    // Filter the file to validate if it meets the required video extension
    const fileFilter = (req, file, cb) => {
      if (file.mimetype === "video/mp4") {
        cb(null, true);
      } else {
        cb(
          {
            message: "Unsupported File Format",
          },
          false
        );
      }
    };
  
    // Set the storage, file filter and file size with multer
    const upload = multer({
      storage,
      limits: {
        fieldNameSize: 200,
        fileSize: 30 * 1024 * 1024,
      },
      fileFilter,
    }).single("video");
  
    upload(req, res, (err) => {
      if (err) {
        return res.send(err);
      }
  
      // SEND FILE TO CLOUDINARY
      cloudinary.config({
        cloud_name: config.CLOUD_NAME,
        api_key: config.API_KEY,
        api_secret: config.API_SECRET
    });
      const { path } = req.file; // file becomes available in req at this point
  
      const fName = req.file.originalname.split(".")[0];
      cloudinary.uploader.upload(
        path,
        {
          resource_type: "video",
          public_id: `VideoUploads/${fName}`,
          chunk_size: 6000000,
          eager: [
            {
              width: 300,
              height: 300,
              crop: "pad",
              audio_codec: "none",
            },
            {
              width: 160,
              height: 100,
              crop: "crop",
              gravity: "south",
              audio_codec: "none",
            },
          ],
        },
  
        // Send cloudinary response or catch error
        (err, video) => {
          if (err) return res.send(err);
  
          fs.unlinkSync(path);
          return res.send(video);
        }
      );
    });
  });
  
  //...
  

module.exports = router;
