//npm init
// npm install express

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.ndFile(__dirname + "/index.html");
});




// Normal Calculator
app.post("/", (req, res) => {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1+num2;

    res.send("The result of the calculator is" + result);
});

//BMI Calculator
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
});

//BMI Calculator

app.post("/bmicalculator", (req, res) => {

    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = weight / (height + height);

    res.send("The result of the BMIcalculator is " + bmi);
});
    // console.log(req.body);



app.listen(port, () => {
    console.log('Example app listening on port http://localhost:3000')
});

// console.log('Example app listening on port http://localhost:${port}')
