// Create a node js application to pass the json file and print the contents on the console as well as the browser
import fs from 'fs';
import express from 'express';

fs.readFile('temp.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const obj = JSON.parse(data);
  data=obj;
  console.log(obj);
});

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  fs.readFile('temp.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    console.log(jsonData);
    res.send(jsonData);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

