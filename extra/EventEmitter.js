import express from "express";
import EventEmitter from "events";

const app = express();
const events = new EventEmitter();
events.on("event1", function (msg) {
    console.log("EventEmitter callled");
    console.log(msg);
});
app.get("/",(req, res)=>{
    res.send("api called");
    events.emit("event1","It's Event1");
})

app.listen(5000, (()=>{
    console.log("Server listening on port");
}));