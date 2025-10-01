import React, { useState } from "react";
import noteContext from "./NotesContext";

const NotesState = (props) => {
  const host = "http://localhost:3000/";
  const init_notes = [
    {
      "_id": "8cfc8c5c32746215",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My First note",
      "description": "This is a First from me",
      "tag": "Cafe",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfc8c3d27c5965215",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfc8cc3d27c759525",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My First note",
      "description": "This is a First from me",
      "tag": "Home",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfc5c3d27565215",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfc8c5c27c759465",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My First note",
      "description": "This is a First from me",
      "tag": "School",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68fc8c5c3dc7595216",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My JAMAI note",
      "description": "This is a Second note",
      "tag": "GENDU",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "cfc8c5cd27c75946521",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "6cfc8c5c3d27c7594621",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfcc5c3d27c759465",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Garage",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfcc5c7c759465",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Tour",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
  ];
  const [notes, setnotes] = useState(init_notes);

  //Fetch Notes
  const fetchNotes = async () => {
    const response = await fetch(`${host}api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZmIxYzc3YmJjNTdiM2VjNjE1YTZhIn0sImlhdCI6MTc1ODQ0NDM5OH0.lwPNKmhffNNd9sj3U6WhONRFykJCl3K6Ajau946KZV4",
      },
    });
    const data = await response.json();
    console.log(data);
    setnotes(data);
  };

  //Add Note
  const addNote = async (note) => {
    console.log("Note Added: ", note);
    //POST Method to ADD note
    const response = await fetch(`${host}api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZmIxYzc3YmJjNTdiM2VjNjE1YTZhIn0sImlhdCI6MTc1ODQ0NDM5OH0.lwPNKmhffNNd9sj3U6WhONRFykJCl3K6Ajau946KZV4",
      },
      body: JSON.stringify(note),
    });

    setnotes(notes.concat(note));
  };

  //Delete Note
  const deleteNote = (id) => {
    console.log("Deleting note with id: ", id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNote);
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, fetchNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NotesState;
