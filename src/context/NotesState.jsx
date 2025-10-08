import React, { useState } from "react";
import noteContext from "./NotesContext";
import { toast } from "sonner";

const NotesState = (props) => {
  // const host = "http://localhost:3000/";

  const [notes, setnotes] = useState([]);
  //Fetch Notes
  const fetchNotes = async () => {
    const response = await fetch(`/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();

    setnotes(data);
  };

  //Add Note
  const addNote = async (note) => {
    //POST Method to ADD note
    try {
      const response = await fetch(`/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(note),
      });
      const newNote = await response.json();
      if (!response.ok) {
        console.log("Validation Error: ", newNote.errors);
        toast.error(newNote?.errors?.[0]?.msg || "Unable to add Note!");
        return;
      }

      setnotes(notes.concat(newNote));
      toast.success("Note Added!");
    } catch (e) {
      console.log({ error: e });
      toast.error("Unable to Add note!");
    }
  };

  //Delete Note
  const deleteNote = async (id) => {
    //Delete Note Backend
    try {
      const response = await fetch(`/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();

      const newNote = notes.filter((note) => {
        return note._id !== id;
      });
      setnotes(newNote);
      toast.success("Note Deleted");
    } catch (e) {
      console.log({ error: e });
      toast.error("Unable to Delete!");
    }
  };

  //Update notes
  const editNote = async (note) => {
    try {
      const response = await fetch(`/api/notes/updatenote/${note._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(note),
      });

      const data = await response.json();

      setnotes((prevNotes) =>
        prevNotes.map((n) =>
          n._id === data.note._id ? { ...n, ...data.note } : n
        )
      );
      toast.success("Edit Successful!");
    } catch (error) {
      console.log({ error: e.message });
      toast.error("Unable to edit!");
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, fetchNotes, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NotesState;
