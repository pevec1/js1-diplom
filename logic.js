let players = ["x", "o"];
let activePlayer = 0;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  activePlayer = "x";
  renderBoard(board);
}

function click(x, o) {
  if (activePlayer == "x") {
    board[x][o] = activePlayer;
    renderBoard(board);
    massive(board);
    activePlayer = "o";
  } else {
    board[x][o] = activePlayer;
    renderBoard(board);
    massive(board);
    activePlayer = "x";
  }
  if (win == 1) {
    showWinner();
  }
}

function massive(board) {
  let horiz = [];
  let horizo = [];
  horiz.length = 3;
  horizo.length = 3;
  for (let i = 0; i < board.length; i++) {
    horiz[i] = 0;
    horizo[i] = 0;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == "x") {
        horiz[i] = horiz[i] + 1;
        // alert(i+" " + j + " " +board[i][j]+ " " +horiz[i]);
      } else if (board[i][j] == "o") {
        horizo[i] = horizo[i] + 1;
        //  alert(i+" " + j + " " +board[i][j]+ " " +horizo[i]);
      }
    }

    if (horiz[i] == 3) {
      alert("winner " + activePlayer);
    }
  }
}

startGame();

click(x, o);
