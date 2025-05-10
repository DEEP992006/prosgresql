//importing module and packages
import { sql } from "../config/db.js";
import { verifyToken } from "./jwt.js";
// to display all todo
export const showtodo = async (id) => {
  let auth_user = verifyToken(id);
  const alltodo = await sql`
      SELECT * FROM todo WHERE user_email = ${auth_user.email}
      `; // sql query
  return alltodo; // returning all todo
};
// add new todo
export const addtodo = async (name, description, user_email) => {
  const newtodo = await sql`INSERT INTO todo(name,description,user_email)
    VALUES(${name},${description},${user_email})
    RETURNING name,description,user_email
    `; // sql quertz
  return newtodo; // returning new todo
};
// update todo
export const update_todo = async (name, new_todo, token) => {
  const auth_user = verifyToken(token);
  console.log(auth_user.email);
  const updated_todo =
    await sql`update todo SET name = ${new_todo.name},description = ${new_todo.description} WHERE name = ${name} AND user_email = ${auth_user.email} returning name,description,user_email`; // sql query
  return updated_todo; // return updates todo
};
// delete todo
export const deletetodo = async (name) => {
  const deletetedodo = await sql`
    DELETE FROM todo
    WHERE name = ${name}
    RETURNING name
    `; // sql query
  return deletetedodo; //return deleted todos name
};
