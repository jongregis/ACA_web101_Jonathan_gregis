var players = [];
var markers = ["x", "o"];
players[0] = "player1";
players[1] = "player2";
var whosTurn = 0;

function placeMark(clickedtd) {
  if (clickedtd.innerHTML == "&nbsp;") {
    clickedtd.innerHTML = "<span>" + markers[whosTurn] + "</span>";
    togglePlayer();
  }
}

function togglePlayer() {
  if (whosTurn == 0) whosTurn = 1;
  else whosTurn = 0;
}
