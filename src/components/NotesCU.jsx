import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import noteContext from "@/context/NotesContext";

const NotesCU = ({ cardTitle, cardDescription, cardCTA }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const { notes, addNote } = useContext(noteContext);
  const uniqueTags = [...new Set(notes.map((note) => note.tag))];
  const [tag, settag] = useState("");

  // console.log(uniqueTags);
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      tag,
    };
    addNote(data);
  };

  return (
    <div>
      <Card className="w-full font-['gilroy']">
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label className="font-semibold">Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                  placeholder="Eg. My Note"
                  required
                />
                <Label className="font-semibold">Description</Label>
                <Input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                  placeholder="Eg. Attended a coffee date last weekend..."
                  required
                />
                <label htmlFor="tag" className="font-semibold">
                  Tag
                </label>
                <Input
                  id="tag"
                  type="text"
                  value={tag}
                  required
                  placeholder="Ex. Home"
                  onChange={(e) => settag(capitalize(e.target.value))}></Input>

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
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full cursor-pointer disabled:cursor-not-allowed"
            disabled={!title.trim() || !description.trim() || !tag.trim()}
            onClick={handleSubmit}>
            {cardCTA}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotesCU;
