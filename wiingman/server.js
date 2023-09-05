// An express server, which will handle api requests coming in
// import { Configuration, OpenAIApi } from "openai";
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
    
    const response = await openai.createChatCompletion({
        
        
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

app.get('/', (req, res) => {
    res.send('Hey Yall World')
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

