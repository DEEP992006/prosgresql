import { sql } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "./jwt.js";

export const signup = async (email, password) => {
  const hashed_pass = await bcrypt.hash(password, 10);
  const new_user = await sql`
    INSERT INTO "user"(email, password)
    VALUES(${email}, ${hashed_pass})
    RETURNING email
  `;
  return new_user[0];
};

export const login = async (email, password) => {
  const user = await sql`
    SELECT * FROM "user" WHERE email = ${email}
  `;
  if (user.length === 0) {
    throw new Error("user not found");
  }

  const is_match = await bcrypt.compare(password, user[0].password);
  if (!is_match){
    throw new Error("password is wrong");
  }
  const token = await generateToken({ email });
  return { token };
};
