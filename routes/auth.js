import express from "express";
const router = express.Router();
import { login } from "../service/auth.js";
import { signup } from "../service/auth.js";
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("email and password are required");
    }
    const new_user = await signup(email, password);
    res.status(201).send(new_user);
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).send("Registration failed");
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("email and password are required");
    }
    const user_data = await login(email, password);
    res.send(user_data[0].email + " log in success");
  } catch (error) {
    res.status(500).send(`log in faied user data not found`);
  }
});
export default router;
