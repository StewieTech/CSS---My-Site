require('dotenv').config();
const OpenAI = require('openai');
const {Configuration, OpenAIApi} = OpenAI;


const secrets = require('./secrets');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
//
app.use(bodyParser.json());
app.use(cors());

//
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.get('/google-auth', (req, res) => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    res.json({clientId, clientSecret});
  });

app.post('/googlelogin', async (req, res) => {
    const {tokenId} = req.body;
    client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
    }).then(response => {
        const {email_verified, name, email} = response.payload;
        if (email_verified) {
            res.json({
                message: 'Login success!',
                user: {name, email},
            });
        } else {
            res.json({
                message: 'Login failed!',
            });
        }
    });
});

app.post('/', async (req, res) => {

    const {message} = req.body ;
    const contentAnswer = secrets.contentAnswer ;


    const response = await openai.createChatCompletion({
        "model": "gpt-3.5-turbo",
        messages: [
            {role: "system", content: contentAnswer},
            {role: "user", content: message},
        ],


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

app.get('/', (req, res) => {
    res.send('Hey Yall World')
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

                           