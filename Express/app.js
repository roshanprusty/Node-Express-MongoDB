import express from 'express';
let app = express();

//Route
app.get('/', (req, res)=>{
    res.status(200).send('<h2>Hello from express server</h2>');
})

//server
const port = 3000;
app.listen(port, () => {
    console.log('server has started ...');
})