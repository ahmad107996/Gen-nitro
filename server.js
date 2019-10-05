const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spiky-promise.glitch.me/`);
}, 280000);

var shell = require('shelljs');
  
shell.exec('java -jar JMusicBot-0.2.5.jar')