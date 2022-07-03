const express = require("express");
const router = express.Router();
const File = require("../controller/File");
const multer = require("multer");

const upload = multer({ dest: "uploads" });

router.post("/upload", upload.single("file"), File.uploadFile);
router.get("/file/:fileId", File.downloadFile);
router.post("/file/:fileId", File.downloadFile);
router.get("/file/single/:fileId", File.getFile);
router.put("/file/update/:fileId", upload.single("file"), File.updateFile);
router.delete("/file/delete/:fileId", File.deleteFile);

module.exports = router;
