import React from "react";
import NotesCU from "./NotesCU";
import Notes from "./Notes";
import NavBar from "./NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row m-4 gap-4">
        <div className="w-full md:w-2/5">
          <NotesCU
            cardTitle="Add Notes"
            cardDescription="Add new notes"
            cardCTA="Add Note"
          />
        </div>
        <div className="w-full md:w-3/5">
          <Notes />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
