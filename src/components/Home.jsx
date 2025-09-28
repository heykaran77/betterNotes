import React from "react";
import Notes from "./Notes";
import NotesCU from "./NotesCU";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row ml-4 gap-4">
      <div className="w-full md:w-2/5">
        <NotesCU
          cardTitle="Add Notes"
          cardDescription="Add new notes"
          cardCTA="Add Note"
        />
      </div>
      <div className="w-full mr-4 md:w-3/5">
        <Notes />
      </div>
    </div>
  );
};

export default Home;
