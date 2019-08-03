const keypressHandler = require('./js/keypressHandler');
keypressHandler.initialize(message => console.log(`Message received: ${message}`));

const httpHandler = require('./js/httpHandler');

// const WebSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer(httpHandler.router);

// "router" is a "requestListener" function that runs every time a request to that server is made.
// AKA httpHandler.router is invoked every time someone makes a request to "server"

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);

// wsServer = new WebSocketServer({
//   httpServer: server,
//   autoAcceptConnections: false
// });

// wsServer.on('request', function(request) {
//   var connection = request.accept('echo-protocol', request.origin);
//   console.log((new Date()) + ' Connection accepted.');
//   connection.on('message', function(message) {
//       console.log("SEVER: websocket successful!")
//       if (message.type === 'utf8') {
//           console.log('Received Message: ' + message.utf8Data);
//           connection.sendUTF(message.utf8Data);
//       }
//       else if (message.type === 'binary') {
//           console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
//           connection.sendBytes(message.binaryData);
//       }
//   });
//   connection.on('close', function(reasonCode, description) {
//       console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//   });
// });