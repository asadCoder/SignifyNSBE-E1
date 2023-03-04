const express = require('express');
const router = express.Router();
require('dotenv').config();
const {Configuration, OpenAIApi} = require('openai');

const config = new Configuration({
    apiKey: process.env.API_TOKEN
});

const chatData = []
const openai = new OpenAIApi(config);


//this will be called on a loop both by F1 and R3 
router.get("/getchatbotmessages", (req, res) => {
    res.send(chatData)
})

router.get('/chatbot/message', (req, res) => {
    const temp = {
        message: req.body["message"],
        id: 0
    }
    chatData.push(temp)
    const response = openai.createCompletion({
        model: 'text-davinci-003',
        prompt: req.body.message,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 256
    });

    response.then((data) => {
        const message = {message: data.data.choices[0].text};
        const temp = {
            message: message["message"],
            id: 1
        }
        chatData.push(temp)
        console.log(chatData);
        res.send(message["message"]);
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;
