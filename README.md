# Tic Tac Toe Game

A simple and interactive **Tic Tac Toe game** developed using **HTML, CSS, and JavaScript**. The game allows two players to play against each other by taking alternate turns as **X and O**.

## How the Game Works

* The game board consists of **9 boxes** arranged in a 3×3 grid.
* JavaScript uses a `turnO` variable to manage the turns between **O and X**.
* An array of **8 winning patterns** is used to check all possible winning combinations:

  * 3 rows
  * 3 columns
  * 2 diagonals
* Every time a player selects a box, the selected box is disabled to prevent another move in the same position.
* After every move, the `checkwinner()` function checks whether any player has completed a winning pattern.
* If a player wins, the game ends and displays the winner message.
* A `count` variable keeps track of the number of moves.
* If all 9 boxes are filled without a winner, the game displays **"Match Draw"**.
* The `gameover` variable prevents further moves once the game has ended.

## Technologies Used

* **HTML** – Structure of the game
* **CSS** – Styling and game board design
* **JavaScript** – Game logic, player turns, winner detection, draw detection, and event handling
