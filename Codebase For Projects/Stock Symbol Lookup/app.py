import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from datetime import date

from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")

# Global Variables

# Make sure API key is set
# if not os.environ.get("API_KEY"):
#     raise RuntimeError("API_KEY not set")




@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/")
def index():
    """Show portfolio of stocks"""


    if "user_id" not in session:
        return redirect("/login")
    user_id = session["user_id"]

    stocksapp = db.execute("SELECT  Symbol, SNAME, SAMOUNT, SPRICE, STOTAL FROM stocks WHERE user_id = ? GROUP BY Symbol", user_id )

    cashapp = db.execute("SELECT cash FROM users WHERE id = ?", user_id)[0]["cash"]
    return render_template("index.html", stocks=stocksapp, cash=cashapp)


    # totalapp = 0
    # # cashapp

    # for stock in stocksapp:
    #     # totalapp += stock["price"] * stock["Total Shares"]
    #     totalapp += stock["SPRICE"] * stock["STOTAL"]



    # return render_template("index.html"
    #                     #    ,stocks=stocksapp, cash=cashapp, usd=usd, total=totalapp
    #                        )


    # # Query database to get user's portfolio data
    # portfolio = db.execute("SELECT symbol, name, SUM(shares) AS shares, price, SUM(total) AS total FROM portfolio WHERE user_id = :user_id GROUP BY symbol HAVING SUM(shares) > 0", user_id=session["user_id"])

    # # Query database to get user's cash balance
    # rows = db.execute("SELECT cash FROM users WHERE id = :user_id", user_id=session["user_id"])
    # cash = rows[0]["cash"]

    # # Calculate total portfolio value
    # total_value = cash
    # for stock in portfolio:
    #     total_value += stock["total"]

    # # Render portfolio page with portfolio and cash balance information
    # return render_template("index.html", portfolio=portfolio, cash=cash, total_value=total_value)



@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock"""
    user_id = session["user_id"]
    cash = db.execute("SELECT cash FROM users WHERE id = ?", user_id)
    counter = cash[0]
    counter = counter['cash']
    today = date.today()
    if request.method == "POST":
        quotes = lookup(request.form.get("symbol"))
        shares = int(request.form.get("shares"))

        print(shares)
        print(user_id)
        if quotes == None:
            return apology("Stock Ticker Does Not Exist!", 400)
        if not shares > 0:
            return apology("Postive Shares Only!", 400)


        Qname = (quotes['name'])
        Qprice = (quotes['price'])
        symbol = (quotes['symbol'])
        purchase = int(Qprice) * int(shares)
        counter -= purchase




        print(quotes)
        print(symbol)
        print(purchase)
        print(counter)
        print(today)

        db.execute("Update users SET cash = ? WHERE id = ?", counter, user_id )
        db.execute("INSERT INTO Stocks (Symbol, SNAME, SPRICE, SAMOUNT, STOTAL, SCASH, purchase_date, user_ID) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",symbol, Qname, Qprice, shares, purchase, counter, today, user_id)

        # elif quotes != None:
        return render_template("buy.html", QnameR=Qname,QpriceR=Qprice, symbol=symbol, cashR=counter )
        # return lookup(quote)

    else:

        Portfolio = db.execute("SELECT * FROM users where id = ?", user_id)
        return render_template("buy.html", Portfolio=Portfolio, cashR=counter)
        # return render_template("buy.html")
        # TODO: Display the entries in the database on index.html




    # return apology("TODO")

# HERE!!!!!
@app.route("/history")
@login_required
def history():
    """Show history of transactions"""
    user_id=session["user_id"]

    # Retrieve transaction history for current user
    transactions = db.execute("SELECT symbol, SNAME, SAMOUNT, SPRICE, purchase_date FROM Stocks WHERE user_id = ?", user_id)


    # Render history template with transactions data
    return render_template("history.html", transactions=transactions, usd=usd)





@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    """Get stock quote."""
    if request.method == "POST":
        quotes = lookup(request.form.get("symbol"))
        if quotes == None:
            return apology("Stock Ticker Does Not Exist!", 400)

        Qname = (quotes['name'])
        Qprice = (quotes['price'])
        symbol = (quotes['symbol'])

        print(quotes)
        print(quotes['name'])
        print(symbol)

        # elif quotes != None:
        return render_template("quote.html", QnameR=Qname,QpriceR=Qprice, symbol=symbol )
        # return lookup(quote)

    else:
        return render_template("quote.html")
    return apology("TODO")


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    if request.method == "POST":

        username = request.form.get("username")
        password = request.form.get("password")
        # Ensure username was submitted
        confirmation = request.form.get("confirmation")
        secure = generate_password_hash(password)
        check = db.execute("SELECT COUNT(*) FROM users WHERE username = :username", username=username)
        print(username)
        print(check)
        test = [{'COUNT(*)': 0}]
        print(test)
        print(secure)
        # usernamecheck = db.execute("SELECT COUNT(*) FROM users WHERE username = :username", username)

        if not username:
            return apology("required user baby")
        elif not password:
            return apology("required Passing but never on me")
        elif not confirmation:
            return apology("passwords need to match and no blanking on me!")

        if password != confirmation:
            return apology("Passwords must match!", 400)

          # Query database for username
        elif test != check:
            return apology("Username already exists!!", 400)


    # Ensure password was submitted
        elif password == confirmation:

            # TODO: Add the user's entry into the database
            db.execute("INSERT INTO users (username, hash) VALUES(?, ?)", username, secure)
            return redirect("/")

    #  return redirect("/")
    #   name = request.form.get("name", "world")
    #   return render_template("index.html", name=name)

    else:
        #  username = request.form.get("username")
        #  password = request.form.get("password")
        #  db.execute("INSERT INTO finance (username, hash) VALUES(?, ?)", username, password)
        #  return redirect("/register")
        return render_template("register.html")
        # registrants = db.execute("SELECT * FROM birthdays")
        # return render_template("index.html", registrants=registrants)
        # # TODO: Display the entries in the database on index.html

        # return redirect("/")

    # return apology("TODO")

# HERE!!!!!!!!!!!!
@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    """Sell shares of stock"""

    user_id=session["user_id"]

    # Get list of available symbols for the current user
    symbolsapp = db.execute("SELECT Symbol FROM stocks WHERE user_id = ? GROUP BY Symbol", user_id)


    if request.method == "POST":
        # Validate form data
        Symbol = request.form.get("symbol")
        shares = int(request.form.get("shares"))
        # if not Symbol or not shares:
        #     return apology("Please select a symbol and enter the number of shares")
        # if shares <=  0:
        #     return apology("Please enter a positive number of shares")




        # Look up the current price of the stock
        price = lookup(Symbol)["SPRICE"]
        stock = lookup(Symbol)["SNAME"]

        # stock = lookup(request.form.get("quote"))
        # price = int(request.form.get("shares"))


        # Get the user's portfolio for the selected symbol
        portfolio = db.execute("SELECT * FROM stocks WHERE user_id = ? AND Symbol = ? GROUP BY Symbol", user_id, Symbol)  #[0]["shares"])

        if not portfolio:
            return apology("You don't own any shares of that stock")
        shares_owned = SAMOUNT[0]["SAMOUNT"]

        if shares > shares_owned:
            return apology("You don't own that many shares of that stock")

        cashHand = db.execute("SELECT cash FROM users WHERE id =?", user_id)[0]["cash"]

        # Calculate the total sale price and update the user's cash balance and portfolio
        sale_price = shares * price
        db.execute("UPDATE users SET cash = ? WHERE id = ?", cashHand + sale_price, user_id)
        # if shares == shares_owned:
        #     db.execute("DELETE FROM portfolio WHERE user_id = ? AND symbol = ?",
        #                user_id, symbol)
        # else:
        #     db.execute("UPDATE portfolio SET shares = shares - ? WHERE user_id ? AND symbol = ?",
        #                shares, user_id, symbol)

        # Record the transaction in the history table
        db.execute("INSERT INTO stocks (user_id, SNAME, SAMOUNT, SPRICE, Symbol) VALUES (?,?, ?, ?)", user_id, Symbol, -shares, price, stock)

        # Redirect to the index page
        return redirect("/")

    else:
        # Render the sell form
        return render_template("sell.html", Symbols=symbolsapp)


def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


# Listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)


# API key = pk_82caa2b999f54c56ad83bf7e46409fd2
# export API_KEY=pk_82caa2b999f54c56ad83bf7e46409fd2


if __name__ == '__main__':
    app.debug = True
    app.run()
    

    # **  To Do **
# Require that a user input a username, implemented as a text field whose name is username.
# Require that a user input a password, implemented as a text field whose name is password,
# Submit the user’s input via POST to /register.

# ** check **
#  Render an apology if the user’s input is blank or the username already exists.
#  and then that same password again, implemented as a text field whose name is confirmation.
# Render an apology if either input is blank or the passwords do not match.

# INSERT the new user into users, storing a hash of the user’s password, not the password itself. Hash the user’s password with generate_password_hash Odds are you’ll want to create a new template (e.g., register.html) that’s quite similar to login.html.
# Once the user is registered, you may either automatically log in the user or bring the user to a page where they can log in themselves.

# py -m venv env
# env\Scripts\activate
# FLASK_ENV = development
# python -m flask run
