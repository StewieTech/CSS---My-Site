const express = require('express')
const router = express.Router();
// const rother = express();
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static("public"));

router.post('/', async (req, res) => {
    const {email, password } = req.body
    const result = await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2)",
        [email, password]
    );
    console.log(result);
    res.render("/register-success")

    // console.log(email, password)

    res.status(200).json({ message: 'Registrations successful'});
//    res.redirect("/register");
});

router.get('/register', (req, res) => {

});

module.exports = router;