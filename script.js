// MAKE ELEMENT GETS GLOBAL VARS FOR EASE
var tl = document.getElementById('tl'),
  tc = document.getElementById('tc'),
  tr = document.getElementById('tr'),
  ml = document.getElementById('ml'),
  mc = document.getElementById('mc'),
  mr = document.getElementById('mr'),
  bl = document.getElementById('bl'),
  bc = document.getElementById('bc'),
  br = document.getElementById('br');

// MAKE A GLOBALLY AVAILABLE ARRAY FOR USE WITH FULL
// BOARD FUNCTIONS
var theBoard = [];
theBoard.push(tl, tc, tr, ml, mc, mr, bl, bc, br);

var playerMark = '';
var computerMark = '';

var winner = '';

var unmarkedSquares = ['tl', 'tc', 'tr', 'ml', 'mc', 'mr', 'bl', 'bc', 'br'];
var unmarkedBoard = [tl, tc, tr, ml, mc, mr, bl, bc, br];

function clearBoard() {
  theBoard.forEach(function(cur, ind, arr) {
    cur.innerHTML = '';
  });
  playerMark = '';
  computerMark = '';
  getMarks();
}

function getMarks() {
  $("#dialog").dialog({
    modal: true,
    resizable: false,
    dialogClass: "no-close",
    buttons: {
      "X": function() {
        playerMark = 'X';
        computerMark = 'O';
        $(this).dialog("close");
      },
      "O": function() {
        playerMark = 'O';
        computerMark = 'X';
        $(this).dialog("close");
      }
    }
  });
}

// THE GAME FUNCTIONS

function mark(square, name) {
  if (unmarkedSquares.indexOf(name) === -1) {
    alert('Space is occupied. Select an unmarked space.');
  } else {
    square.innerHTML = playerMark;
    unmarkedSquares.splice(unmarkedSquares.indexOf(name), 1);
    unmarkedBoard.splice(unmarkedBoard.indexOf(square), 1);
    checkWin(playerMark, "PLAYER");
    checkBoardFull();
    if (winner === '') {
    computerTurn();
    checkWin(computerMark, 'COMPUTER');
    checkBoardFull();
    }
    if (winner !== '') {
      restart();
    }
    winner = '';
  }
}

function computerTurn() {
  var computerMove = Math.floor(Math.random() * unmarkedSquares.length);
  document.getElementById(unmarkedSquares[computerMove]).innerHTML = computerMark;
  unmarkedSquares.splice(computerMove, 1);
}

function checkWin(turn, str) {
  if (tl.innerHTML === turn && tc.innerHTML === turn && tr.innerHTML === turn) {
    alert(str + " WINS!!!!");
    winner = str;
  } else if (tl.innerHTML === turn && ml.innerHTML === turn && bl.innerHTML === turn) {
    alert(str + " WINS!!!!");
    winner = str;
  } else if (tc.innerHTML === turn && mc.innerHTML === turn && bc.innerHTML === turn) {
    alert(str + " WINS!!!!");
    winner = str;
  } else if (tr.innerHTML === turn && mr.innerHTML === turn && br.innerHTML === turn) {
    alert(str + " WINS!!!!");
    winner = str;
  } else if (ml.innerHTML === turn && mc.innerHTML === turn && mr.innerHTML === turn) {
    alert(str + " WINS!!!!");
    winner = str;
  } else if (bl.innerHTML === turn && bc.innerHTML === turn && br.innerHTML === turn) {
    alert(str + " WINS!!!!");
    winner = str;
  } else if (tl.innerHTML === turn && mc.innerHTML === turn && br.innerHTML === turn) {
    alert(str + " WINS!!!!");
    winner = str;
  } else if (tr.innerHTML === turn && mc.innerHTML === turn && bl.innerHTML === turn) {
    alert(str + " WINS!!!!");
    winner = str;
  }
}

function restart() {
  clearBoard();
  unmarkedSquares.splice(0);
  unmarkedSquares.push('tl', 'tc', 'tr', 'ml', 'mc', 'mr', 'bl', 'bc', 'br');
  unmarkedBoard.splice(0);
  unmarkedBoard.push(tl, tc, tr, ml, mc, mr, bl, bc, br);
}

function checkBoardFull() {
  if (unmarkedSquares.length === 0) {
    alert("DRAW");
    winner = "player";
  }
}

function runGame() {
// THE GAME
clearBoard();
// ASK THE PLAYER WHETHER THEY WANT TO PLAY AS X OR O
// INFORM THE PLAYER THAT X TAKES THE FIRST TURN
// SET THE PLAYER TO THE PLAYER'S CHOICE AND THE
// COMPUTER TO THE OPPOSING CHOICE
}