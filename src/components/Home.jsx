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
import noteContext from "@/context/NotesContext";
import Notes from "./Notes";

const Home = () => {
  const context = useContext(noteContext);
  const { notes, setnotes } = context;
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <div className="flex flex-col md:flex-row ml-4 gap-4">
      <div className="w-full md:w-2/5">
        <Card className="w-full font-['gilroy']">
          <CardHeader>
            <CardTitle>Add Notes</CardTitle>
            <CardDescription>Add new notes</CardDescription>
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
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={!title.trim()}>
              Add Note
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full md:w-3/5 mr-4">
        <Notes />
      </div>
    </div>
  );
};

export default Home;
