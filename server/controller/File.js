const Model = require("../model/file");
const bcrypt = require("bcrypt");

class File {
    static async uploadFile(req, res) {
        try {
            const fileData = {
                path: req.file.path,
                originalName: req.file.originalname,
                owner: req.body.owner,
            }

            if(req.body.password != "" && req.body.password != null) {
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
            if(!file) {
                res.json({
                    message: "No file found"
                });
            }

            if(file.password != null) {
                if(req.body.password == null) {
                    return res.json({
                        message: "You need a password to download this file."
                    });
                }
                else {
                    if(!await bcrypt.compare(req.body.password, file.password)) {
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
            if(!file) {
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
            if(!file) {
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
            if(!file) {
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