const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const request = require('request');
const { application } = require('express');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    const data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us11.api.mailchimp.com/3.0/lists/8c74df818e"

    const options = {
        method: "POST",
        auth: "errol1:c24891e67b093c69566809365d16c099-us11"
    }

    //comeback here to figure out error
    const request = https.request(url, options, function(response) {

        // if (response.statusCode === 200) {
        //     res.send("Successfully Subscribed");
        // } else {
        //     res.send("There was an error");
        // }
        
        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }


        response.on("data", function(data){
            
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();




    console.log(firstName, lastName, email);

});




// app.listen(3000, function() {
//     console.log("listening on port 3000");
// });

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on port 3000");
});

// apiKey
// c24891e67b093c69566809365d16c099-us11

// list id 
// 8c74df818e

