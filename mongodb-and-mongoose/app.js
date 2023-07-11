//IMPORT PACKAGE
import express from 'express';
import morgan from 'morgan';
import moviesRouter from './Routes/moviesRoutes';

let app = express();

app.use(express.json());

app.use(express.static('./public'))

//USING ROUTES
app.use('/api/v1/movies', moviesRouter)

module.exports = app;

