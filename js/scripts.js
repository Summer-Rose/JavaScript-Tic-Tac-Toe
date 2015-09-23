function Player(name, mark) {
  this.name = name;
  this.mark = mark;
}

function Space(id, player) {
  this.id = id;
  //All spaces initially assigned to player 0 (aka empty)
  this.player = player;
}

function Board() {
  var newBoard = [];
  for( var i = 1; i <= 9; i++) {
    newBoard.push([i, 0]);
  };
  return newBoard;
}

function Game(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
}
