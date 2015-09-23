function Player(name, mark, spacesTaken) {
  this.name = name;
  this.mark = mark;
  this.spacesTaken = spacesTaken;
}

Player.prototype.winner = function(){
  //create this later
}

Player.prototype.addSpace = function(space) {
  this.spacesTaken.push([space[0], space[1]]);//spacesTaken refuses to be defined
}

function Space(coordinateX, coordinateY) {
  this.coordinateX = coordinateX;
  this.coordinateY = coordinateY;
}

Space.prototype.setMark = function (player){
  this.player = player.mark;
}

function Board(space, number) {
  var squareRoot = Math.floor(Math.sqrt(number));
  var newBoard = [];
  for(var i = 1; i <= squareRoot; i++) {
    for(var j = 1; j <= squareRoot; j++) {
      var newSpace = new Space(i,j);
      newBoard.push(newSpace);
    }
  }
  return newBoard;
}

Board.prototype.isWinner = function(player) {
    for(var i; i < player.spacesTaken.length; i++) {

    var xs = []; //create array of x's
    var ys = [];
    for (var i = 0; i < player.spacesTaken.length; i++)
    {
      xs.push(player.spacesTaken[i][0]) //0 is x value
      ys.push(player.spacesTaken[i][1]) //1 is y value
      }
  }
  //then compare
}



function Game(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
}
