import express from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fetchuser from "../middleware/fetchuser.js";
import { useId } from "react";

const JWT_secret = "karan$inghh";

const router = express.Router();

//create new user POST: /api/auth/createuser. NO Login
router.post(
  "/createuser",
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
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      //Using User Model to CREATE user
      let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_secret);
      res.json({ authToken });
    } catch (e) {
      if (e.code === 11000) {
        return res.status(400).json({ message: "E-mail already exists" });
      }
      res.status(500).json({ message: e.message });
    }
  }
);

// Authenticate User: POST /api/auth/login. NO Login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json("Please enter valid credentials!");
      }
      const comparePassword = await bcrypt.compare(password, user.password);

      if (!comparePassword) {
        return res.status(400).json("Please enter valid credentials!");
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_secret);
      res.json({ authToken });
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Fetch user Data: POST /aip/auth/getuser. Login Required.
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (e) {
    res.status(500).send("Internal server error");
  }
});

export default router;
