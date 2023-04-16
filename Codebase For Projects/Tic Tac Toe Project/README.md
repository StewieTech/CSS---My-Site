# Tic Tac Toe
#### Video Demo:  <URL https://youtu.be/skRVUWm-LY4>
#### Website: https://tic-tac-errol.herokuapp.com/
#### Description: For my final project I created a Tic Tac Toe game built with python flask JavaScript and SQLite.
For my final project I created a simple web application that lets users play Tic Tac Toe and save the games they play to an SQLite database. I used python, javascript and flask to build the web application When the user goes to the homepage of the web application, they will see a Tic Tac Toe board that they can play on. The user can enter their name in a form and select whether they want to play as X or O. Once they select "New Game," the board will reset and they can start playing versus another player.

The application has two routes in app.py: the index route ("/") and the saveGame route ("/saveGame"). The index route displays the Tic Tac Toe board and the form that users can fill out to start a new game. The saveGame route is called when the user submits the form to save the game. The saveGame route gets the user's name and the winner of the game from the form, as well as the timestamp of when the game was saved. It then inserts the game into the SQLite database.


The index.html file contains the HTML code for the homepage of the web application. It includes a stylesheet that defines the look of the web application. The file has a form that users can fill out to start a new game, and a table that displays the saved games. The form includes inputs for the player names and a hidden input for the winner of the game. The table displays the saved games, with columns for the player names and the winner.

The JavaScript code at the end of the index.html file handles the logic for playing Tic Tac Toe. It selects all the cells in the table and adds an event listener to each cell. When a cell is clicked, the script checks whether the cell already has an X or O in it, and whether there is already a winner. If the cell is empty and there is no winner, the script puts an X or O in the cell, checks whether there is a winner, and switches the player turn. If there is a winner, the script sets the value of the hidden input for the winner and submits the form to save the game. The turn indicator is also updated to show which player's turn it is. When there is a winner the turn indicator is updated to show which player has won.

Overall, this code sets up a simple web application that lets users play Tic Tac Toe and save the games they play. It uses the Flask framework to handle web requests and a SQLite database to store the games. The HTML and JavaScript code provide the user interface for playing the game and saving the games.


