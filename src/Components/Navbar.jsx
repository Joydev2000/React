import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-zinc-400 text-black flex  py-8 text-2xl">
        <NavLink
          className={({ isActive }) => ` ${ isActive ? "text-orange-700" : "text-gray-700" } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ml-10 `}to="/">

          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>` ${ isActive ? "text-orange-700" : "text-gray-700"} border-b block py-2 pr-4 pl-3 duration-200 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ml-10`}to="/Footer">

          Footer
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
