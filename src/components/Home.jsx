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

const Home = () => {
  const [title, settitle] = useState("");
  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add Notes</CardTitle>
          <CardDescription>Add new notes</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label>Title</Label>
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
  );
};

export default Home;
