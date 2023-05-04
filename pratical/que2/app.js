import express from 'express';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Registration = mongoose.model('Registration', registrationSchema);

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const registration = new Registration(req.body);
  registration.save()
    .then(() => res.send('Registration successful!'))
    .catch((err) => res.send('Error: ' + err.message));
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
