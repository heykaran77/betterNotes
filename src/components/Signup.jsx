import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/auth/createuser`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const json = await response.json();
      if (!response.ok) {
        toast.error(
          `SignUp Failed: ${
            json?.message ||
            json?.errors?.[0]?.msg ||
            json?.errors?.[1]?.msg ||
            json?.errors?.[3]?.msg ||
            "Something went wrong"
          }`
        );
        return;
      }
      localStorage.setItem("token", json.authToken);
      navigate("/dashboard");
      toast.success(`Welcome! ${userDetails.name}`);
    } catch (e) {
      toast.error(`Error: ${e}`);
    }
  };
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)]">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Enter the details below to sign up</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Eg. Karan Singh V"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <Button type="submit" className="w-full cursor-pointer">
                Sign Up
              </Button>
              <NavLink
                end
                to="/login"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline font-bold mt-3">
                Already have an account? Login
              </NavLink>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
