// Here a keypress in the browser will move the swimmers
// To do: add GET call to server for a random direction
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];

    // GET CALL
    // $.get("http://localhost:3000/", function(data, status) {
    //   console.log("Responding to server's directions: " + data);
    //   SwimTeam.move(data.toLowerCase());
    // });

    // POST CALL
    $.ajax({
      data: direction.toLowerCase(),
      type: "POST",
      url: "http://localhost:3000/",
      success: SwimTeam.move(direction.toLowerCase())
    });

  } // if
});

console.log('Client is running in the browser!');
