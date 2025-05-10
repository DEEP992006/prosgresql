import { sql } from "../config/db.js";
export const signup = async (email, password) => {
  let new_user = await sql`
    INSERT into "user"(email,password)
    VALUES(${email},${password})
    RETURNING email,password
    `;
  return new_user;
};
export const login = async (email, password) => {
  const user = await sql`
    SELECT * FROM "user" WHERE email = ${email} AND password = ${password}
    `;
  console.log(user);

  return user;
};
