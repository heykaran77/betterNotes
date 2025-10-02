import React, { useState, useContext, useEffect } from "react";
import noteContext from "@/context/NotesContext";
import NotesItem from "./NotesItem";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchNotes, editNote } = context;

  const [dialogOpen, setdialogOpen] = useState(false);
  const [selectedNote, setselectedNote] = useState(null);

  const uniqueTags = [...new Set(notes.map((note) => note.tag))];
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [tag, settag] = useState("");

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const updateNote = (note) => {
    setdialogOpen(true);
    setselectedNote(note);
    settag(note.tag || "");
    settitle(note.title || "");
    setdescription(note.description || "");
  };

  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: selectedNote._id,
      title,
      description,
      tag,
    };
    console.log(data);
    editNote(data);
    setdialogOpen(false);
  };

  return (
    <div className="font-['gilroy']">
      <h1 className="font-semibold text-[clamp(24px,5vw,30px)]">Your Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {notes.length == 0 &&
          "No notes to display, the notes you add will be visible here."}
        {notes.map((note) => (
          <NotesItem key={note._id} note={note} updateNote={updateNote} />
        ))}
      </div>
      {selectedNote && (
        <Dialog open={dialogOpen} onOpenChange={setdialogOpen}>
          <form>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Note</DialogTitle>
                <DialogDescription>
                  Make changes to your note here. Click save when done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => settitle(capitalize(e.target.value))}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setdescription(capitalize(e.target.value))}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tag">Tag</Label>
                  <Input
                    id="tag"
                    name="tag"
                    value={tag}
                    onChange={(e) => settag(capitalize(e.target.value))}
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {uniqueTags.map((t) => (
                      <Badge
                        key={t}
                        variant={capitalize(tag) == t ? "default" : "outline"}
                        className="rounded-lg font-medium cursor-pointer"
                        onClick={() => settag(t)}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" onClick={handleSubmit}>
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      )}
    </div>
  );
};

export default Notes;
