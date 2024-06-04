const express = require('express')
const router = express.Router();
const db = require('../db/serverPG');
const bcrypt = require('bcrypt') ;
const saltRounds = 10;
const session = require('express-session')
const passport = require('passport');
const { Strategy } = require('passport-local');




const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(express.static("public"));

router.use(session({
    secret: "itsAnSecret",
    resave: false,
    saveUninitialized: true,
})
);

router.use(passport.initialize());
router.use(passport.session());




router.post('/register', async (req, res) => {
    const {email, password } = req.body
    
    try {
        const checkResult = await db.query("SELECT * FROM users WHERE email = $1", 
        [email,
        ]);

        if (checkResult.rows.length > 0) {
            res.send("Email already exists. Try logging in")
        } else {  
        // evenutually have SQL statements come from a .sql file
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                console.error("Error while hashing: ", err)
                res.status(500).json({ message: err.message })
            } else {

                const result = await db.query(
                    "INSERT INTO users (email, password) VALUES ($1, $2)",
                    [email, hash]
                );
                console.log(result);
                res.status(200).json({ message: 'Registrations successful'})
            }
        })
            
    }
    } 
    catch (error) {
        console.error('Error during registration', error);
        res.status(500).json({ message: 'Registration failed' });
    }
// }

});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const loginPassword = password


});

router.get('/register', (req, res) => {
    res.send("Hey register world")
    
});

router.get('/dashboard', (req, res) => {
   if (req.isAuthenticated()) {
         res.send('Welcome to the dashboard');
   } else {
    isRedirect('/login')
         res.send('You must log in first');
   }
})

passport.use(new Strategy(async function verify(username, password, cb) { 
    console.log(username);
    try {
        const result = await db.query("SELECT * FROM users WHERE email = $1",
            [username,

            ]);
            if (result.rows.length > 0) {
                const user = result.rows[0];
                const storedHashedPassword = user.password;
                bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
                    if (err) {
                        console.log("Passwords don't compare: ", err);
                    } else {
                        console.log(result)
                        res.status(200).json({ message: 'Login was successful!!'});
                    }
                })
            }



    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ message: "Login has failed"});
    }

}))

module.exports = router;