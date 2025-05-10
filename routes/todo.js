// importing all modules
import express from "express"
import { showtodo,addtodo,deletetodo,update_todo } from "../service/todo.js"
// creating router to handle request
const router =  express.Router()
// get all todo
router.get("/",async (req,res) => {
  res.send(await showtodo())
})
// add new todo
router.post("/",async (req,res) => {
  const {name,description,user_email} = req.body  // extracting data from request body 
  const addedtodo =await addtodo(name,description,user_email) //store to db 
  res.send(addedtodo) // sending response
})
// update todo
router.put("/",async (req,res) => {
    const {name,new_todo} = req.body // extract from request body
    res.send(await update_todo(name,new_todo));// updating todo and sending response
})
// delete todo
router.delete("/",async (req,res) => {
  const {name} = req.body  // extract from request body
  const tododelete = await deletetodo(name)  //store to db 
  res.send(tododelete)  // sending response
})
export default router // exporting router 