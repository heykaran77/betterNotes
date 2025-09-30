import { Edit, Trash } from "lucide-react";
import React from "react";

const NotesItem = (props) => {
  const { _id, user, title, description, tag, date } = props.note;
  return (
    <div className="border-2 border-dashed px-4 py-6 rounded-sm">
      <h2 className="font-bold text-center text-xl">{title}</h2>
      <p className="mt-4">{description}</p>
      <span>{tag}</span> | <span>{new Date(date).toLocaleString()}</span>
      <div className="flex gap-4 justify-end mt-4">
        <Trash className="cursor-pointer text-red-500" />
        <Edit className="cursor-pointer text-blue-500" />
      </div>
    </div>
  );
};

export default NotesItem;
