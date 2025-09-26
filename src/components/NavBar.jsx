import { Bold } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4 px-20 py-6 m-4 border-2 border-neutral-200 rounded-sm">
        <Link to="/">
          <img src="./logo.png" alt="Better Notes" width={20} height={20} />
        </Link>

        <div className="nav-items flex gap-4">
          <NavLink end to="/dashboard" className="font-medium leading-tight">
            Dashboard
          </NavLink>
          <NavLink end to="/about" className="font-medium leading-tight">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
