var squareRoot;

function Player(name, mark, spacesTaken) {
  this.name = name;
  this.mark = mark;
  this.spacesTaken = spacesTaken;
}

Player.prototype.addSpace = function(space) {
  this.spacesTaken.push([space[0], space[1]]);//spacesTaken refuses to be defined
}

Player.prototype.isWinner = function(Board) {
  var xs = []; //create array of x's
  var ys = [];
    for (var i = 0; i < this.spacesTaken.length; i++) {
      xs.push(this.spacesTaken[i][0]) //0 is x value
      ys.push(this.spacesTaken[i][1]) //1 is y value
    }

  var xString = xs.toString();
  var yString = ys.toString();

  var rowLength = Math.floor(Math.sqrt(Board.length)); //how many need to be in a row to win
  if (this.spacesTaken.length == rowLength) {
    if (xs.reduce(function(a, b){return (a === b)?a:(!b);}) === xs[0] || (ys.reduce(function(a, b){return (a === b)?a:(!b);}) === ys[0])) {
      return true;
    } else if (xString == yString){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

function Space(coordinateX, coordinateY) {
  this.coordinateX = coordinateX;
  this.coordinateY = coordinateY;
}

Space.prototype.setMark = function (player){
  this.player = player.mark;
}

function Board(space, number) {
  this.number = number;
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

function Game(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
}
