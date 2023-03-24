let players = ['x', 'o'];
let activePlayer = 0;
let board;

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(board);
};

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  massive(board);
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function massive(board) {

  n = board.length;
  let obj = {
    horiz: [[0], [0]],
    vertic: {k:[], l:[]},
    diag: [0, 0],
    diag2: [0, 0]
  }

  for (let i = 0; i < n; i++) {
    obj.horiz[0][i] = 0;
    obj.horiz[1][i] = 0;
    obj.vertic.k[i] = 0;
    obj.vertic.l[i] = 0;
   }

  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 'x') {
        obj.horiz[0][i]++;
        // alert(obj.horiz[0][i] + " и " + obj.horiz[0][j]);
      } else if (board[i][j] == 'o') {
        obj.horiz[1][i]++;
      }
      if (board[j][i] == 'x') {
        obj.vertic.k[i]++;

        //alert(obj.vertic.k[i] + " и " + obj.vertic.k[j]);
      } else if (board[j][i] == 'o') {
        obj.vertic.l[i]++;
      }
      if (i == j && board[i][j] == 'x') {
        obj.diag[0]++;
      } else if (i == j && board[i][j] == 'o') {
        obj.diag[1]++;
      }
      if (j == n - i - 1 && board[i][j] == 'x') {
        obj.diag2[0]++;
      } else if (j == n - i - 1 && board[i][j] == 'o') {
        obj.diag2[1]++;
      }

    }

    if (obj.horiz[0][i] == n || obj.vertic.k[i] == n || obj.horiz[1][i] == n || obj.vertic.l[i] == n || obj.diag[0] == n || obj.diag[1] == n || obj.diag2[0] == n || obj.diag2[1] == n) {
      showWinner(activePlayer);
    }
  }
}

startGame();

click(row, col);