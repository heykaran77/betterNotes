import express from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

//create new user
router.post(
  "/createUser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter a valid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    // If Validation unsuccessful
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      //Using User Model to CREATE user
      let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user);
    } catch (e) {
      if (e.code === 11000) {
        return res.status(400).json({ message: "Email already exists" });
      }
      res.status(500).json({ message: e.message });
    }
  }
);
export default router;
