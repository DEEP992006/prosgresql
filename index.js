// importing modules
import express from 'express' 
import todoroute from "./routes/todo.js"
// making express app
const app = express()
// to  parse json
app.use(express.json())
// all routes
app.use("/todo",todoroute)
// starting app
app.listen(3000,async () => {
  console.log("app listening on localhost:3000");
})