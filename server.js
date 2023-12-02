const express = require('express');

const bodyParser = require('body-parser');

const openai = require('openai');

const dotenv = require('dotenv');

const cors = require('cors');
 
dotenv.config();
 
const app = express();

const port = 3000;

app.get('/', (req, res) => {

  res.send('Hello, this is the root route!');

});
 
// Enable CORS for all routes

app.use(cors());
 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
 
app.post('/chat', (req, res) => {

    const userMessage = req.body.user_message;

    const botResponse = "Hello! How can I help you?"; // Replace this with OpenAI response

    res.json({ bot_response: botResponse });

});
 
app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);

});