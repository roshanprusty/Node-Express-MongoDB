const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const numberOperationsMiddleware = (req, res, next) => {
  const { number } = req.body;

  const increment = parseInt(number) + 1;
  const decrement = parseInt(number) - 1;
  const square = Math.pow(parseInt(number), 2);

  req.numberOperations = { increment, decrement, square };
  next();
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



app.post('/process', numberOperationsMiddleware, (req, res) => {
  const { increment, decrement, square } = req.numberOperations;
  res.send(
    `Number: ${req.body.number}<br>
    Increment: ${increment}<br>
    Decrement: ${decrement}<br>
    Square: ${square}`
  );
});


app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});

