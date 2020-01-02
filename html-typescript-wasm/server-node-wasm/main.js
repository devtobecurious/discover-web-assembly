const express = require("express");
const path = require("path");
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

express.static.mime.types["wasm"] = "application/wasm";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

console.log(__dirname);

app.use('/static', express.static(__dirname + '/public'));