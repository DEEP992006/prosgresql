// importing modules
import express from 'express' 
import todoroute from "./routes/todo.js"
import auth from "./routes/auth.js"
import bcrypt from "bcryptjs";
const hash = bcrypt.hashSync("bacon", 10);
const a = await bcrypt.compare("bacon", hash);
const salt = await bcrypt.genSalt(1);
// making express app
const app = express()
// to  parse json
app.use(express.json())
// all routes
app.use("/todo",todoroute)
app.use("/auth",auth)
// starting app
app.listen(3000,async () => {
  console.log("app listening on localhost:5000");
  console.log(hash);
  console.log(a);
  console.log(salt);
  
  
  
})