const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Define a schema and model for our data
const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const Data = mongoose.model('Data', dataSchema);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Display the form
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  const newData = new Data({
    name: name,
    email: email,
  });

  // Save data to MongoDB
  newData.save((err, data) => {
    if (err) {
      console.error(err);
      res.send('Error saving data to MongoDB');
    } else {
      console.log('Data saved to MongoDB:', data);
      res.send('Data saved successfully!');
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
