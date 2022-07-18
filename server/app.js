const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./route/index");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const config = require('./config/env');
const path = require('path');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next()
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server connected on ${PORT}`);
});

const uri = `mongodb+srv://${config.db_username}:${config.password}@${config.cluster}.mongodb.net/${config.dbname}?retryWrites=true&w=majority`;

//mongoose.connect(uri);
mongoose.connect(config.local_DB);
