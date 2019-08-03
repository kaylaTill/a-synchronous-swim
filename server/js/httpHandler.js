const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  if (req.method === 'GET') {
    console.log(`Serving ${req.method} for url ${req.url}`);
    var direction = createRandomSwimCommand();
    console.log("SERVER IS SENDING DIRECTION: " + direction)
  } else {
    console.log('Serving request type ' + req.method + ' for url ' + req.url);
  }
  res.writeHead(200, headers);
  res.write(direction)
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};

let createRandomSwimCommand = () => {
  let commands = ['left', 'right', 'up', 'down'];
  return commands[Math.floor(Math.random()*commands.length)];
}