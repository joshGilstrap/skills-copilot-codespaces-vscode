// Create a web server
// that can receive a POST request containing some text. 
// The request should contain a string in the body of the POST to the path '/comments'. 
// Your web server should respond with the same text in the body of its response.

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.post('/comments', (req, res) => {
    res.send(req.body);
});

app.listen(3000);