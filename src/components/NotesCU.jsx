import React, { useState } from "react";
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

const NotesCU = ({ cardTitle, cardDescription, cardCTA }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

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
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={!title.trim()}>
            {cardCTA}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotesCU;
