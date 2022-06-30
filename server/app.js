const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./route/index");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.get('/', (req, res) => {
    res.send("File server");
});


app.listen(PORT, () => {
    console.log(`Server connected on ${PORT}`);
});

mongoose.connect("mongodb://127.0.0.1/filesharing");
