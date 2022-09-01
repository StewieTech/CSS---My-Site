const express = require('express');
const https = require('https');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(require, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
    console.log(req.body.cityName);
    // console.log("post received");

    const query = req.body.cityName;
    const apikey = "ae37ce48bf28051f15c2a0a4a94b63ce";
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +" &appid= "+ apikey + "&units= "+ unit;


    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesription = weatherData.weather[0].description;
            const weatherImage = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + weatherImage + "@2x.png";
       
            res.write("<h1>The Temperature in Toronto is  " + temp + " degrees in Celsius </h1>");
            res.write("<h2>The weather is Currently " + weatherDesription + "</h2>");
            res.write("<img src=" + imageURL + ">");
            res.send();

            console.log(weatherDesription);

            console.log(data);
        })
    })
})



app.listen(3000, function () {
    console.log('Server running at http://localhost:3000')

})