import fetchuser from "../middleware/fetchuser.js";
import Note from "../models/Note.js";
import { body, validationResult } from "express-validator";
import express from "express";

const router = express.Router();

// Fetch User notes: GET /api/notes/fetchnotes Login Required
router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (e) {
    res.status(500).send("Internal server error");
  }
});

// Add Notes: POST /api/notes/addnote Login Required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Minimum length for the description is 5").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).json({ errors: result.array() });
    }

    try {
      const { title, description, tag } = req.body;
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
);

// Update the notes: PUT /api/notes/updatenote Login Required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  //create a new note
  let newNote = {};
  if (title) newNote.title = title;
  if (description) newNote.description = description;
  if (tag) newNote.tag = tag;

  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not found");
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Access Deneid. Not Allowed");
  }
  try {
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    res.json({ note });
  } catch (e) {
    res.json({ error: e });
  }
});

// Delete Notes: DELETE /api/notes/deletenote Login Required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not found");
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Access Deneid. Not Allowed");
  }

  try {
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ "Success": "Note Deleted", note: note });
  } catch (e) {
    res.json({ error: e });
  }
});

export default router;
