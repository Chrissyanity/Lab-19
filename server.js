//server.js
var http = require('http');
var randomStuff = require('./random');
http.createServer(startServer).listen(8000);

function startServer(request, response){
  response.writeHead(200, { "Content-Type": "text/plain" });
  console.log(randomStuff[Math.floor(Math.random() * randomStuff.length)]);
  response.end();
}
