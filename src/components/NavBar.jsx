import { Bold } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4 px-8 py-4 m-4 border-2 border-neutral-200 rounded-sm">
        <Link to="/">
          <img src="./logo.png" alt="Better Notes" width={40} height={40} />
        </Link>

        <div className="nav-items flex gap-8">
          <NavLink
            end
            to="/dashboard"
            className={({ isActive }) =>
              `font-medium leading-tight transition-colors px-3 py-2 rounded-full ${
                isActive
                  ? "text-primary border-2 border-orange-400"
                  : "text-neutral-600 hover:text-neutral-900"
              }`
            }>
            Dashboard
          </NavLink>
          <NavLink
            end
            to="/about"
            className={({ isActive }) =>
              `font-medium leading-tight transition-colors px-3 py-2 rounded-full ${
                isActive
                  ? "text-primary border-2 border-orange-400"
                  : "text-neutral-600 hover:text-neutral-900"
              }`
            }>
            About
          </NavLink>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="text-primary rounded-full  border-2 border-orange-400">
            <NavLink end to="/login">
              Login
            </NavLink>
          </Button>
          <Button
            variant="default"
            className="rounded-full bg-orange-400 text-orange-100">
            <NavLink end to="/signup">
              SignUp
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
