// create websocket from client
const wsServerUrl = 'ws://127.0.0.1:3000';
socket = new WebSocket(wsServerUrl);
console.log(`Websocket created from client.`)

socket.onopen = function(e) {
    console.log("---[open] Connection established");
    // alert("Sending to server");
    socket.send("Sending socket msg from client!!!");
  };
  
  socket.onmessage = function(event) {
    console.log(`---[message] Data received from server: ${event.data}`);
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(`---[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log('---[close] Connection died');
    }
  };
  
  socket.onerror = function(error) {
    console.log(`---[error] ${error.message}`);
  };

// const createWebSocketFromClient = () {
//     $.get("http://localhost:3000/", function(data, status) {
//       console.log("Responding to server's directions: " + data);
//       SwimTeam.move(data.toLowerCase());
//     });
//   };