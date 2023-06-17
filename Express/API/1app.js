import exp from 'constants';
import express from 'express';
import fs from 'fs';

let app = express();
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

/* `app.use(express.json());` is setting up middleware in the Express application to parse incoming
requests with JSON payloads. This middleware adds a `body` object to the request object, which
contains the parsed JSON data. This allows the application to handle JSON data in requests easily. */
app.use(express.json());

app.get('/api/v1/movies', (req, res)=>{
    //here i have written .json just because to have O/P in json format if would have written in .send then it would have in text format
    res.status(200).json({
        status: "success",
        data: {
            movie: movies
        }
    })
})
app.post('/api/v1/movies', (req,res)=>{
    // console.log(req.body);
    const newID = movies[movies.length-1].id+1;
    /* `const newMovie = Object.assign({id:newID}, req.body);` is creating a new object `newMovie` by
    merging two objects - `{id:newID}` and `req.body`. The `{id:newID}` object is created to add a
    new unique ID to the movie object. The `req.body` object contains the data sent in the request
    body. The `Object.assign()` method copies the values of all enumerable properties from one or
    more source objects to a target object. In this case, it is copying the `id` property from
    `{id:newID}` and all other properties from `req.body` to create a new object `newMovie`. */
    const newMovie = Object.assign({id:newID}, req.body);
    movies.push(newMovie);
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err)=>{
        res.status(201).json({
            status: "success",
            data: {
                movie : newMovie
            }
        })
    })
    // res.send("CREATED");
})
const port = 3000;
app.listen(port, () => {
    console.log('server has started ...');
})