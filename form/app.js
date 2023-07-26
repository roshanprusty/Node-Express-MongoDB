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

app.set('view engine', 'ejs'); // Set the view engine to ejs
app.set('views', __dirname + '/views'); // Set the views directory to "views"

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Display the form
app.get('/', (req, res) => {
  res.render('index'); // Render the "index" view (index.ejs)
});

// Handle form submission
app.post('/submit', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newData = new Data({
      name: name,
      email: email,
    });

    const savedData = await newData.save();

    console.log('Data saved to MongoDB:', savedData);
    res.status(200).json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ message: 'Error saving data to MongoDB' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
