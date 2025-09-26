import React, { useState } from "react";
import noteContext from "./NotesContext";

const NotesState = (props) => {
  return (
    <noteContext.Provider value={{}}>{props.children}</noteContext.Provider>
  );
};

export default NotesState;
