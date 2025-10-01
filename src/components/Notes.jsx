import React, { useState, useContext, useEffect } from "react";
import noteContext from "@/context/NotesContext";
import NotesItem from "./NotesItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="font-['gilroy']">
      <h1 className="font-semibold text-[clamp(24px,5vw,30px)]">Your Notes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
        {notes.map((note) => (
          <NotesItem key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
