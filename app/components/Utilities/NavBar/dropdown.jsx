"use client";

import { useState } from "react";
import DropdownItem from "./dropdownItem";

const DropdownButton = () => {
  const [open, setOpen] = useState(false);

  const toggleButton = (event) => {
    event.preventDefault
    setOpen((prevOpen) => !prevOpen);
    console.log("open");
  };
  const dropdownClass = open ? "" : "hidden";

  return (
    <div>
      <div className="dropdown text-color-primary">
        <button onClick={toggleButton}>
          <div tabIndex={0} role="button" className="btn m-1 ">
            Genres
          </div>
        </button>
        <ul
          tabIndex={0}
          className={`dropdown-content ${dropdownClass}  z-[1] menu p-2 shadow bg-base-100 rounded-box w-full`}
        >
          
          <DropdownItem />
        </ul>
      </div>
    </div>
  );
};

export default DropdownButton;
