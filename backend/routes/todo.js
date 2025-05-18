// importing all modules
import express from "express"
import { showtodo,addtodo,deletetodo,update_todo } from "../service/todo.js"
import { verifyToken } from "../service/jwt.js"
// creating router to handle request
const router =  express.Router()
// get all todo
router.get("/:id",async (req,res) => {
  const {id} = req.params
  console.log(id);
  res.send(await showtodo(id))
})
// add new todo
router.post("/",async (req,res) => {
  const {name,description,token} = req.body  // extracting data from request body 
  // const auth = await verifyToken(tocken)
  const addedtodo =await addtodo(name,description,verifyToken(token).email) //store to db 
  res.send(addedtodo) // sending response
})
// update todo
router.put("/",async (req,res) => {
    const {name,new_todo,token} = req.body // extract from request body
    res.send(await update_todo(name,new_todo,token));// updating todo and sending response
})
// delete todo
router.delete("/",async (req,res) => {
  const {name} = req.body  // extract from request body
  const tododelete = await deletetodo(name)  //store to db 
  res.send(tododelete)  // sending response
})
export default router // exporting router 