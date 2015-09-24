describe('Player', function() {
  it("create new instance of player", function() {
    var playerOne = new Player("Perry", "X", []);
    expect(playerOne.name).to.equal("Perry");
  });

  it("returns player's mark", function() {
    var playerOne = new Player("Perry", "X");
    expect(playerOne.mark).to.equal("X");
  });

  it("returns the winner correctlty when all xs same", function() {
    var board = new Board(Space,9);
    var player1 = new Player ("Perry", "X", []);
    player1.addSpace(1,1);
    player1.addSpace(1,2);
    player1.addSpace(1,3);
    expect(player1.isWinner(board)).to.equal(true);
  });

  it("returns false when xs are different", function() {
    var board = new Board(Space,9);
    var player1 = new Player ("Perry", "X", []);
    player1.addSpace(2,1);
    player1.addSpace(1,2);
    player1.addSpace(1,3);
    expect(player1.isWinner(board)).to.equal(false);
  });

  it("returns true when ys are same", function() {
    var board = new Board(Space,9);
    var player1 = new Player ("Perry", "X", []);
    player1.addSpace(2,1);
    player1.addSpace(1,1);
    player1.addSpace(3,1);
    expect(player1.isWinner(board)).to.equal(true);
  });

  it("returns true when xs and ys are same", function() {
    var board = new Board(Space,9);
    var player1 = new Player ("Perry", "X", []);
    player1.addSpace(1,1);
    player1.addSpace(2,2);
    player1.addSpace(3,3);
    expect(player1.isWinner(board)).to.equal(true);
  });

  it("returns true when a player plays from the top right to lower left corner", function() {
    var board = new Board(Space,9);
    var player1 = new Player ("Perry", "X", []);
    player1.addSpace(2,2);
    player1.addSpace(3,1);
    player1.addSpace(1,3);
    expect(player1.isWinner(board)).to.equal(true);
  });

  it("sorts the spaces held by a player by x value", function() {
    var board = new Board(Space,9);
    var player1 = new Player ("Perry", "X", []);
    player1.addSpace(2,1);
    player1.addSpace(3,3);
    player1.addSpace(1,3);
    expect(player1.spacesTaken).to.eql([[1,3],[2,1],[3,3]]);
  });
});

describe('Space', function() {
  it("returns correct coordinates", function() {
    var space1 = new Space(1,1);
    expect(space1.coordinateX).to.equal(1);
    expect(space1.coordinateY).to.equal(1);
  });

  it("adds spaces to list of spaces played by player", function() {
    var player1 = new Player ("Perry", "X", []);
    player1.addSpace(1,1);
    expect(player1.spacesTaken[0]).to.eql([1,1]);
  });
});

describe('Board', function() {
  it("initially creates board of nine empty spaces", function() {
    var board = new Board(Space, 9);
    expect(board).to.have.length(9);
  });

  it("returns the correct space", function() {
    var board = new Board(Space,9);
    expect(board[0].coordinateX).to.equal(1);
    expect(board[0].coordinateY).to.equal(1);
  });
});

describe('Game', function() {
  it("initially creates an empty board and two players", function() {
    var board = new Board(Space,9);
    var player1 = new Player("Perry", "X");
    var player2 = new Player("Summer", "O");
    var newGame = new Game(board, player1, player2, player1);
    expect(newGame.board).to.have.length(9);
  });

  it("returns the correct player name", function() {
    var board = new Board();
    var player1 = new Player("Perry", "X");
    var player2 = new Player("Summer", "O");
    var newGame = new Game(board, player1, player2, player1);
    expect(newGame.player1.name).to.equal("Perry");
  });

  it("returns the correct player mark", function() {
    var board = new Board();
    var player1 = new Player("Perry", "X");
    var player2 = new Player("Summer", "O");
    var newGame = new Game(board, player1, player2, player1);
    expect(newGame.player2.mark).to.equal("O");
  });

  it("switches the player correctly", function() {
    var board = new Board();
    var player1 = new Player("Perry", "X");
    var player2 = new Player("Summer", "O");
    var newGame = new Game(board, player1, player2, player1);
    newGame.switchPlayer();
    expect(newGame.currentPlayer).to.equal(player2);
  });
});
