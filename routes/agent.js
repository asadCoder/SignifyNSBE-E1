const express = require('express');
const router = express.Router();
require('dotenv').config();

const chatData = []

// const messageG = "";


//this will be called on a loop both by F1 and R3
router.get("/getagentmessages", (req, res) => {
    res.send(chatData)
})

//post message from agent to E1
router.post('/agent/message', (req, res) => {
    const {message} = req.body;

    const temp2 = {
        message: message["message"],
        id: 2
    }
    chatData.push(temp2);

    //send message from here to F1 to convert it into sign language or F1 will just call /getagentmessages and retrieve
    //the last one 

});

//from F1 to E1
router.post('/agent/message1', (req, res) => {
    const temp = {
        message: req.body["message"],
        id: 0
    }
    chatData.push(temp)
    // console.log(messageG);
    // temp2 = messageG
    // messageG = ""
    // res.send(temp2);
});

module.exports = router;
