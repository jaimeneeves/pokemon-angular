const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const path = require('path');

const port = process.env.PORT || 8081;

app.use(serveStatic(path.join(__dirname, './dist/pokemon-angular')))

app.listen(port, function () {
  console.log('http://localhost:' + port)
})
