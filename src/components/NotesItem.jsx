import { Edit, Trash } from "lucide-react";
import React, { useContext } from "react";
import { Badge } from "./ui/badge";
import noteContext from "@/context/NotesContext";

const NotesItem = ({ note, updateNote }) => {
  const { _id, user, title, description, tag, date } = note;
  const { deleteNote } = useContext(noteContext);
  return (
    <div className="border-2 border-dashed px-4 py-6 rounded-sm">
      <h2 className="font-bold text-center text-xl">{title}</h2>
      <p className="mt-4">{description}</p>
      <Badge variant="default" className="rounded-lg font-light">
        {tag}
      </Badge>{" "}
      | <span>{new Date(date).toLocaleString()}</span>
      <div className="flex gap-4 justify-end mt-4">
        <Trash
          className="cursor-pointer text-red-500"
          onClick={() => deleteNote(_id)}
        />
        <Edit
          className="cursor-pointer text-blue-500"
          onClick={() => updateNote(note)}
        />
      </div>
    </div>
  );
};

export default NotesItem;
