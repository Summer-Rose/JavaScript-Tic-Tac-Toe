function Player(name, mark, spacesTaken) {
  this.name = name;
  this.mark = mark;
  this.spacesTaken = spacesTaken;
}

Player.prototype.addSpace = function(x,y) {
  this.spacesTaken.push([x, y]);
  this.spacesTaken.sort(function(a,b) {
    return a[0] - b[0];
  });
}

Player.prototype.isWinner = function(Board) {
  var xs = []; //create array of x's
  var ys = []; //create array of ys
  //var xSorted = xs.sort();
  //var ySorted = ys.sort();

    for (var i = 0; i < this.spacesTaken.length; i++) {
      xs.push(this.spacesTaken[i][0]) //0 is x value
      ys.push(this.spacesTaken[i][1]) //1 is y value
    }

  var xString = xs.toString();
  var yString = ys.toString();
  var yStringReverse = ys.reverse().toString();
  var rowLength = Math.floor(Math.sqrt(Board.length)); //how many need to be in a row to win

  if (this.spacesTaken.length == rowLength) {
    //Need three items in array to match conditions when 9 squares
    // [1,1,1]
    // [2,2,2]
    // [3,3,3]

    if (xs.reduce(function(a, b){return (a === b)?a:(!b);}) === xs[0] || (ys.reduce(function(a, b){return (a === b)?a:(!b);}) === ys[0])) {
      return true;
    } else if (xString === yString){
      console.log("x" + xString);
      console.log("y" + yString);
      return true;
    } else if (yStringReverse == xString){
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



function Game(board, player1, player2, currentPlayer) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = currentPlayer;
}

Game.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
}

Game.prototype.reset = function() {
  this.player1.spacesTaken = [];
  this.player2.spacesTaken = [];
}

////// UI /////////

  var player1;
  var player2;
  var board;
  var newGame;

  $("form#addPlayers").submit( function (event){
    event.preventDefault();
    player1 = new Player(($("input#player1name").val()), "X", []);
    player2 = new Player(($("input#player2name").val()), "O", []);
    $("form#addPlayers").hide();
    $("#gameBoard").show();
    newGamePlay();
  });

    $("#playAgain").click( function (event){
      console.log("newgame!");
      playAgain();
      $("form#addPlayers").hide();
      $("#gameBoard").show();
    });

    $("#newPlayers").click( function (event){
      $(".box").addClass("valid");
      $(".box").removeClass("xMark");
      $(".box").removeClass("oMark");
      newGame.reset();
      $("form#addPlayers").show();
      $("#gameBoard").hide();
    });

  function playAgain() {

    $(".box").addClass("valid");
    $(".box").removeClass("oMark");
    $(".box").removeClass("xMark");
    newGame.reset();
    $("#currentPlayer").text(newGame.currentPlayer.name);
        $(".valid").on("click", function(event) {
          $(this).removeClass("valid").off();
          event.preventDefault();
          var boxId = $(this).attr('id');
          if (newGame.currentPlayer == player1) {
            $(this).addClass("xMark");
          } else {
            $(this).addClass("oMark");
          }
          var x = parseInt(boxId[0]);
          var y = parseInt(boxId[1]);
          newGame.currentPlayer.addSpace(x,y);
          if (newGame.currentPlayer.isWinner(board)) {
            $(".valid").removeClass("valid").off();
            $('#winnerName').text(newGame.currentPlayer.name);
            $("#winnerModal").modal("show");
          }
        newGame.switchPlayer();
        $("#currentPlayer").text(newGame.currentPlayer.name);
  });
}

  function newGamePlay() {
    board = new Board(Space, 9);
    newGame = new Game(board, player1, player2, player1);
    $("#currentPlayer").text(newGame.currentPlayer.name);
    debugger;
        $(".valid").on("click", function(event) {
          $(this).removeClass("valid").off();
          event.preventDefault();
          var boxId = $(this).attr('id');

          if (newGame.currentPlayer === player1) {
            $(this).addClass("xMark");
            console.log("name:" + newGame.currentPlayer.name);
          } else {
            $(this).addClass("oMark");
            console.log("name:" + newGame.currentPlayer.name);
          }
          var x = parseInt(boxId[0]);
          var y = parseInt(boxId[1]);
          newGame.currentPlayer.addSpace(x,y);
          if (newGame.currentPlayer.isWinner(board)) {
            $(".valid").removeClass("valid").off();
            $('#winnerName').text(newGame.currentPlayer.name);
            $("#winnerModal").modal("show");
          }
        newGame.switchPlayer();
        $("#currentPlayer").text(newGame.currentPlayer.name);
      });
    }
