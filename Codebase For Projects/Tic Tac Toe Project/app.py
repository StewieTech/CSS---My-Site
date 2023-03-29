import os

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from datetime import datetime
from flask_session import Session




# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///games.db")




@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response





@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':

        return render_template("index.html")
    return render_template("index.html")



@app.route("/saveGame", methods=["GET","POST"])
def saveGame():



    player1 = request.form.get('player1')
    print(player1)
    player2 = request.form.get('player2')
    print(player2)
    winner = request.values.get('winner')
    print(f"The winner of the game between {player1} and {player2} was {winner}.")
    timestamp = datetime.now()


    if request.method == "POST":
        gamesapp = db.execute("INSERT INTO games (player1, player2, winner) VALUES (?, ?, ?)", player1, player2, winner)

    games = db.execute("SELECT player1, player2, winner FROM games where player1 = ? and player2 = ?", player1, player2)
    return render_template('/index.html', games=games)








# def errorhandler(e):
#     """Handle error"""
#     if not isinstance(e, HTTPException):
#         e = InternalServerError()
#     return print("Not Working")


# # Listen for errors
# for code in default_exceptions:
#     app.errorhandler(code)(errorhandler)


# flask run



