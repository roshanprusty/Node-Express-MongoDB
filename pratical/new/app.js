const express = require("express");
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true });

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
  console.log(registration);
  registration.save()
    .then(() => res.send('Registration successful!'))
    .catch((err) => res.send('Error: ' + err.message));
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
