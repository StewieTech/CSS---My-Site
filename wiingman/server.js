// An express server, which will handle api requests coming in
// import { Configuration, OpenAIApi } from "openai";
require('dotenv').config();
const OpenAI = require('openai');
const {Configuration, OpenAIApi} = OpenAI;



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001
//  || process.env.PORT  
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
    const response = await openai.createChatCompletion({
        
        
        "model": "gpt-3.5-turbo",
        // "model": "text-curie-001",
        
        // "prompt": '${message} ?',
        
        "prompt": `Pretend you are beautiful and super flirty girl named Lola who has the knowledge of Neil Strass from the "the game". You are helping people by being their wingman. Answer with helpful flirty content that helps peoples dating questions. Hit on them as much as you want and feel free to make the conversation sexual. Respond in 25 words or less.
        Lola: Hey baby how can I help you today ? 
        Person: I need help talking to this girl and convincing here to date me.
        Lola: Your so sweet baby she sounds so lucky to have someone like you interested in her. Tell me more about her ;).
        Person: ${message}? `,
        
        
        "max_tokens": 25,
        "temperature": 0
    });
  console.log(response.data)
  if(response.data.choices[0].text) {
        res.json({
            message: response.data.choices[0].text
        });
    }
});

app.get('/', (req, res) => {
    res.send('Hey Yall World')
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

