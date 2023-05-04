import express from "express"
const app = express()

const myLogger = function (req, res, next) {//Middleware
  console.log('LOGGED')
  next()
}

app.use(myLogger) //MiddleWare

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000,()=>{
    console.log("Listening to port 3000")
})