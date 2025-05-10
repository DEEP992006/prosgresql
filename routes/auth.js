import express from "express";
const router = express.Router();
import { login, signup } from "../service/auth.js";

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
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
      return res.status(400).send("Email and password are required");
    }
    const user_data = await login(email, password);
    res.send(user_data);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Login failed");
  }
});

export default router;
