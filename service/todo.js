//importing module and packages
import { sql } from "../config/db.js"
// to display all todo
export const showtodo = async () => {
    const alltodo = await sql`
      SELECT * FROM todo
      ` // sql query
    return alltodo // returning all todo
    }
// add new todo
export const addtodo = async (name,description) => {
    const newtodo = await sql`INSERT INTO todo(name,description)
    VALUES(${name},${description})
    RETURNING name,description
    `  // sql quert
    return newtodo // returning new todo
  }
// update todo 
export const update_todo = async (name,new_todo) => {
  const updated_todo = await sql`update todo SET name = ${new_todo.name},description = ${new_todo.description} WHERE name = ${name} returning name,description` // sql query
  return updated_todo // return updates todo 
}
// delete todo
export const deletetodo = async (name) => {
    const deletetedodo = await sql`
    DELETE FROM todo
    WHERE name = ${name}
    RETURNING name
    ` // sql query 
    return deletetedodo //return deleted todos name
  }