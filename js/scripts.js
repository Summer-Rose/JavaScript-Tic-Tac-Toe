function Player(name, mark) {
  this.name = name;
  this.mark = mark;
}

Player.prototype.winner = function(){
  //create this later
}

function Space(coordinateX, coordinateY, player) {
  this.coordinateX = coordinateX;
  this.coordinateY = coordinateY;
  this.player = player;
}

Space.prototype.setMark = function (player){
  this.player = player.mark;
}

function Board(space, number) {
  var squareRoot = Math.floor(Math.sqrt(number));
  var newBoard = [];
  for(var i = 1; i <= squareRoot; i++) {
    for(var j = 1; j <= squareRoot; j++) {
      var newSpace = new Space(i,j,0);
      newBoard.push(newSpace);
    }
  }
  return newBoard;
}

Board.prototype.getScores = function (){


}


function Game(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
}
