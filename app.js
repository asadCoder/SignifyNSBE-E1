const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const chatbot = require('./routes/chatbot.js')
const agent = require('./routes/agent.js')

const cors = require('cors');
const ip = '100.66.64.140';
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(chatbot);
app.use(agent);



app.get('/', (req, res) => {
    res.send('Welcome to signify')
})

app.listen(port, ip, () => console.log('Listening on port 3000'));






// const express = require ('express');
// require('dotenv').config();
// const cors = require('cors');
// const port = 8000;
// const app = express();
// const axios = require("axios");
// const {Configuration, OpenAIApi} = require('openai');

// const token = process.env.API_TOKEN;
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

// const openai = new OpenAIApi(configuration);

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(cors());

// app.post('/message', async (req, res)=>{
//     const {message} = req.body;
//     console.log(message);

//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: req.body.prompt,
//         temperature: 0.9,
//         max_tokens: 150,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0.6,
//         stop: [" Human:", " AI:"],
//       });

//     response.then((data) => {
//         res.send({message: data.data.choice[0].text})
//     })

//     //return res.status(200).json({message: "msg recieved:" + msg});
// })


// app.listen(port, ()=>{
//     console.log("Server is running on port " + port);
// });
