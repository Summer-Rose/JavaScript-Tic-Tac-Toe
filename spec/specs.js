describe('Player', function() {
  it("create new instance of player", function() {
    var playerOne = new Player("Perry", "X");
    expect(playerOne.name).to.equal("Perry");
  });

  it("returns player's mark", function() {
    var playerOne = new Player("Perry", "X");
    expect(playerOne.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("initially returns its id", function() {
    var space1 = new Space(1, 0);
    expect(space1.id).to.equal(1);
  });

  it("returns which player the space is marked by", function() {
    var space1 = new Space(1, 0);
    expect(space1.player).to.equal(0);
  });
  it("returns which player the space is marked by", function() {
    var space1 = new Space(1, 1);
    expect(space1.player).to.equal(1);
  });
});

describe('Board', function() {
  it("initially creates board of nine empty spaces", function() {
    var board = new Board();
    expect(board).to.have.length(9);
  });

  it("returns the correct space", function() {
    var board = new Board();
    expect(board[1]).to.eql([2,0]);
  });
});

describe('Game', function() {
  it("initially creates an empty board and two players", function() {
    var board = new Board();
    var player1 = new Player("Perry", "X");
    var player2 = new Player("Summer", "O");
    var newGame = new Game(board, player1, player2);
    expect(newGame.board).to.have.length(9);
  });

  it("returns the correct player name", function() {
    var board = new Board();
    var player1 = new Player("Perry", "X");
    var player2 = new Player("Summer", "O");
    var newGame = new Game(board, player1, player2);
    expect(newGame.player1.name).to.equal("Perry");
  });

  it("returns the correct player mark", function() {
    var board = new Board();
    var player1 = new Player("Perry", "X");
    var player2 = new Player("Summer", "O");
    var newGame = new Game(board, player1, player2);
    expect(newGame.player2.mark).to.equal("O");
  });
});
