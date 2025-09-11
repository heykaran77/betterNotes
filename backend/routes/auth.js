import express from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/",
  [
    body("name", "Enter a valid Name").isLength({ min: 5 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter a valid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then((user) => res.json(user));
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: e.message });
    }
  }
);
export default router;
