import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path:'./config.env'});

import app from './app.js';

// console.log(process.env); 

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn)=>{
    // console.log(conn);
    console.log("DB Connection Successful");
}).catch((err)=>{
    console.error(err);
});

const movieSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Name is required field"],
        unique: true
    },
    description: {
        type:String,
        required: [true, "Description is required field"]
    },
    duration: {
        type:Number,
        required: [true, "Duration is required field"]
    },
    rating:{
        type:Number,
        default:1.0
    },
});
const Movie=mongoose.model("Movie", movieSchema);
const testMovie= new Movie({
    name: "Die Hard",
    description:"Action packed movies starting bruce willis in this trilling adventure",
    duration:139,
    rating:4.5
});
testMovie.save()
.then(doc =>{ 
    console.log(doc);
})
.catch(err =>{ 
    console.log(err);
})
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('server has started....')
})