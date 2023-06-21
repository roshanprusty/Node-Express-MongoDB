import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(filePath);
});

app.get('/about', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'about.html');
    res.sendFile(filePath);
   
});


app.get('/contact', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'contact.html');
    res.sendFile(filePath);
    
});

app.get('/download-contact', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'contact.html');
    res.download(filePath);
});

app.get('/download-home', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.download(filePath);
});

app.get('/download-about', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'about.html');
    res.download(filePath);
});
 
app.listen(3000, () => {
  console.log('Server started on port 3000');
});