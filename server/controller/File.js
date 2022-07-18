const Model = require("../model/file");
const bcrypt = require("bcrypt");
const cloudinary = require('cloudinary');
const nodeMailer = require('nodemailer');
const { google } = require('googleapis');


const CLIENT_ID = '323050135199-curkaoc218tkatbu2bfmslloa4djhq73.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04M-diCIE9YV3CgYIARAAGAQSNwF-L9IrDCqEmSj-iU8YgSG4dHjjKrElHKw7-1owtMxQHdiT2ZM-Osr6lb1ZbmLJhYHRmW4hFzM'
class File {
    static async uploadFile(req, res) {
        try {
            var image = req.file.path
            const result = await cloudinary.uploader.upload(image)
            var imgUrl = result.secure_url

            const fileData = {
                path: req.file.path,
                originalName: imgUrl,
                owner: req.body.owner,
                receiver: req.body.receiver
            }

            if (req.body.password != "" && req.body.password != null) {
                fileData.password = await bcrypt.hash(req.body.password, 10);
            }

            const file = await Model.create(fileData);
            const fileLink = req.body.password ? `http://localhost:3000/file/secure/${file.id}` : `http://localhost:3000/file/${file.id}`

            return res.json({
                file,
                fileLink
            });

        } catch (error) {
            return error.message;
        }
    }


    static async downloadFile(req, res) {
        try {
            const { fileId } = req.params;
            const file = await Model.findOne({ _id: fileId });
            if (!file) {
                res.json({
                    message: "No file found"
                });
            }

            if (file.password != null) {
                if (req.body.password == null) {
                    return res.json({
                        message: "You need a password to download this file."
                    });
                }
                else {
                    if (!await bcrypt.compare(req.body.password, file.password)) {
                        res.json({
                            message: "Wrong password"
                        })
                    }
                }
            }
            file.downloadCount++;
            await file.save();
            res.download(file.path, file.originalName);
        } catch (error) {
            return error.message;
        }
    }

    static async updateFile(req, res) {
        try {
            const { fileId } = req.params;
            const file = await Model.findOne({ _id: fileId });
            if (!file) {
                res.json({
                    message: "File does not exist"
                })
            }
            else {
                file.owner = file.owner || req.body.owner;
                file.password = file.password || await bcrypt.hash(req.body.password, 10);
                file.path = file.path || req.file.path;
                file.originalName = file.originalName || req.file.originalname;

                await file.save();
                return res.json({
                    message: "File updated"
                });
            }
        } catch (error) {
            return error.message;
        }
    }

    static async deleteFile(req, res) {
        try {
            const { fileId } = req.params;
            const file = await Model.findOneAndDelete({ _id: fileId });
            if (!file) {
                return res.json({
                    message: "File not found"
                });
            }
            else {
                return res.json({
                    message: "File deleted successfully"
                });
            }
        } catch (error) {
            return error.message;
        }
    }

    static async getFile(req, res) {
        try {
            const { fileId } = req.params;
            const file = await Model.findOne({ _id: fileId });
            console.log(fileId)
            if (!file) {
                return res.json({
                    message: "File not found"
                });
            }
            else {
                return res.json({
                    file
                });
            }
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = File;