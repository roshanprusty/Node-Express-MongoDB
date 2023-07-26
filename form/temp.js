const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML page when the user visits the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the form submission
app.post('/calculate', (req, res) => {
  const number = parseFloat(req.body.number);
  if (isNaN(number)) {
    return res.send('Please enter a valid number.');
  }

  const result = {
    increment: number + 1,
    decrement: number - 1,
    square: number * number,
  };

  res.send(result);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
