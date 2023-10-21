// An express server, which will handle api requests coming in
// import { Configuration, OpenAIApi } from "openai";
require('dotenv').config();
const OpenAI = require('openai');
const {Configuration, OpenAIApi} = OpenAI;
const secrets = require('./secrets');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;
// 

app.use(session({
    secret: 'Secret baby', // string I chose the name of
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  }))

app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect("mongodb://localhost:27017/superTest");
mongoose.connect("mongodb://127.0.0.1:27017/userLolaDB");
// , {useNewUrlParser: true})
// mongoose.set("useCreateIndex,", true);

const userSchema = new mongoose.Schema({

    email: String,
    password: String,
    googleId: String
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
userSchema.plugin(findOrCreate)

// const User = new mongoose.model("User", userSchema);

// Testing
const User = mongoose.model("User", userSchema);

const user = new User ({
    email: "test12538@gmail.com",
    password: "test1233",
    googleId: "test33"
})

// user.save();
// User.insertMany([User])
    
//     , function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfullly saved to database")
//     }
// })

passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
    });
}
));

app.get('/', (req, res) => {
    res.send('Hey Yall World')
});

app.get("/auth/google" , function (req,res) {
    passport.authenticate('google', { scope: ['profile'] })
});

app.get('/auth/google/secrets', 
passport.authenticate('google', {failureRedirect: '/login' }),
function(req,res) {
    res.redirect('/secrets');
})

app.get("/login", function(req,res) {
    res.render("login");
});

app.get("register", function(req,res) {
    res.render("register");
});

app.get("/secrets", function(req, res){
    if (req.isAuthenticated()){
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
})

// app.post("/register", function(req, res) {
//     User.register({username: req.body.username}, req.body.password, function(err,  user) {
//         if (err) {
//             console.log(err);
//             res.redirect("/register");
//         } else {
//             passport.authenticate("local")(req, res, function(){
//                 res.redirect("/secrets");
//             })
//         }
//     })
// })

// Add this route to handle registration
app.post("/register", function(req, res) {
    const { email, password } = req.body;
  
    // Create a new user with email and password
    const newUser = new User({ email });
  
    User.register(newUser, password, function(err, user) {
      if (err) {
        console.error('Registration failed:', err);
        res.status(500).json({ error: 'Registration failed' });
      } else {
        passport.authenticate("local")(req, res, function() {
          res.status(200).json({ message: 'Registration successful' });
        });
      }
    });
  });
  

app.post("/login", function(req, res) {
    if (err) {
        console.log(err);
    } else {
        passport.authenticate("local")(req,res, function(){
            res.redirect("/secrets");
        })
    }
})

app.get("/logout", function (req,res) {
    req.logout();
    res.redirect("/");
});





const configuration = new Configuration({
    // organization: "YOUR_ORG_ID",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {

    const {message} = req.body ;
    const contentAnswer = secrets.contentAnswer ;
      
    //   Person: $`{message} `?`
    
    const response = await openai.createChatCompletaion({
        
        
        "model": "gpt-3.5-turbo",
        messages: [
            {role: "system", content: contentAnswer},
            {role: "user", content: message},
        ],
        // "model": "text-curie-001",
        
        // "prompt": '${message} ?',
        
        
        
        "max_tokens": 40,
        "temperature": 0
    });
//   console.log(response.data)
 var answer = response["data"]["choices"][0]["message"]["content"]
  console.log(answer);
  if(answer) {
        res.json({
            message: answer
        });
    }
});



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

