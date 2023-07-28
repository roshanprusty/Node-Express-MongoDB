// import exp from 'constants';
import express from 'express';
// import fs from 'fs';
// import morgan from 'morgan';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path:'./config.env'});

let app = express();
// let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

// function logger(req, res, next) {
//     console.log("custom middleware created");
//     next();
// }

// app.use(express.json());

// if (process.env.NODE_ENV === 'devlopment') {
//     app.use(morgan('dev'))
// }
// app.use(morgan('dev'))
// app.use(logger);
// app.use((req, res, next) => {
//     req.requestedAt = new Date().toISOString();
//     next();
// })

// app.get('/api/v1/movies', (req, res) => {
//     res.status(200).json({
//         status: "success",
//         requestedAt: req.requestedAt,
//         count: movies.length,
//         data: {
//             movie: movies
//         }
//     })
// })
// app.get('/api/v1/movies/:id', (req, res) => {
//     const id = req.params.id * 1;
//     let movie = movies.find(el => el.id === id);
//     // console.log(movie);
//     if (!movie) {
//         res.status(404).json({
//             status: "fail",
//             message: `Movies with id ${id} is not found `
//         });
//     } else {
//         res.status(200).json({
//             status: "success",
//             data: {
//                 movie: movie
//             }
//         });
//     }
// })
// app.post('/api/v1/movies', (req, res) => {
//     console.log(req.body);
//     const newID = movies[movies.length - 1].id + 1;
//     const newMovie = Object.assign({ id: newID }, req.body);
//     movies.push(newMovie);
//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         res.status(201).json({
//             status: "success",
//             data: {
//                 movie: newMovie
//             }
//         })
//     })
// })
// // app.patch('/api/v1/movies/:id', (req, res) => {
// //     const id = req.params.id;
// //     let movieToUpdate = movies.find(el => el.id === id);
// //     let movieIndex = movies.indexOf(movieToUpdate);

// //     Object.assign(movieToUpdate, req.body);

// //     movies[movieIndex] = movieToUpdate;

// //     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) =>{
// //         res.status(200).json({
// //             status: "success",
// //             data: {
// //                 movie: movieToUpdate
// //             }
// //         })
// //     })

// // })
// app.patch('/api/v1/movies/:id', (req, res) => {
//     const id = req.params.id * 1;
//     let movieToUpdate = movies.find(el => el.id === id);
//     console.log(movieToUpdate);
//     if (!movieToUpdate) {
//         // If movie is not found, return an error response
//         return res.status(404).json({
//             status: "error",
//             message: "Movie not found"
//         });
//     }

//     Object.assign(movieToUpdate, req.body);

//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         if (err) {
//             // If there was an error writing the file, return an error response
//             return res.status(500).json({
//                 status: "error",
//                 message: "Failed to update movie"
//             });
//         }

//         res.status(200).json({
//             status: "success",
//             data: {
//                 movie: movieToUpdate
//             }
//         })
//     })
// });

// app.delete('/api/v1/movies/:id', (req, res) => {
//     const id = req.params.id * 1;
//     const movieToDelete = movies.find(el => el.id === id);
//     const index = movies.indexOf(movieToDelete);

//     movies.splice(index, 1);

//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         if (err) {
//             return res.status(500).json({
//                 status: "error",
//                 message: "Failed to update movie"
//             });
//         }

//         res.status(204).json({
//             status: "success",
//             data: {
//                 movie: null
//             }
//         })
//     })
// })

// console.log(process.env);

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn)=>{
    console.log("DB Connection Successfull");
}).catch((error)=>{
    console.log("Some Error Occured", error);
})

const movieSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required field"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Description is required field"]
    },
    duration: {
        type: Number,
        required: [true, "Duration is required field"]
    },
    rating: {
        type: Number,
        default: 1.0
    },
});
const Movie = mongoose.model("Movie", movieSchema);
const testMovie = new Movie({
    name: "Krish",
    description: "blahhhhhhhhhhhh HH HH HH HH HH HH",
    duration: 120,
    rating: 3.4
});
testMovie.save()
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.log(err);
    })
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server has started....')
})