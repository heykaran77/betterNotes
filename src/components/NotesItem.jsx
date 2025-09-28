import React from "react";

const NotesItem = (props) => {
  const { _id, user, title, description, tag, date } = props.note;
  return (
    <div className="border-2 border-dashed px-4 py-6 rounded-sm">
      <h2 className="font-bold text-center text-xl">{title}</h2>
      <p>{description}</p>
      <span>{tag}</span> | <span>{new Date(date).toLocaleString()}</span>
    </div>
  );
};

export default NotesItem;
