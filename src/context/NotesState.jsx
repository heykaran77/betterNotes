import React, { useState } from "react";
import noteContext from "./NotesContext";

const NotesState = (props) => {
  const init_notes = [
    {
      "_id": "8cfc8c5c32746215",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My First note",
      "description": "This is a First from me",
      "tag": "Cafe Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfc8c3d27c5965215",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfc8cc3d27c759525",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My First note",
      "description": "This is a First from me",
      "tag": "Cafe Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfc5c3d27565215",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfc8c5c27c759465",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My First note",
      "description": "This is a First from me",
      "tag": "Cafe Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68fc8c5c3dc7595216",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "cfc8c5cd27c75946521",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "6cfc8c5c3d27c7594621",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
    {
      "_id": "68cfcc5c3d27c759465",
      "user": "68cfb1c77bbc57b3ec615a6a",
      "title": "My Second note",
      "description": "This is a Second note",
      "tag": "Hotel Note",
      "date": "2025-09-21T09:43:33.815Z",
      "__v": 0,
    },
  ];
  const [notes, setnotes] = useState(init_notes);
  return (
    <noteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NotesState;
