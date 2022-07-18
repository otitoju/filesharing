const mongoose = require("mongoose");

const File = new mongoose.Schema({
    path: { type: String },
    originalName: { type: String },
    owner: { type: String },
    password: { type: String },
    downloadCount: { type: Number, default: 0 },
    receiver: { type: String }
});

module.exports = mongoose.model("file", File);
