import React, { useState } from "react";
import ClassNames from "classnames";

const Header = () => {
  const [open, handleMenu] = useState(false);

  const hamburger1Class = ClassNames({
    "h-0.5": true,
    "w-5": true,
    "bg-black": true,
    block: true,
    transition: true,
    transform: true,
    "rotate-45": open,
    "translate-y-1.5": open
  });

  const hamburger2Class = ClassNames({
    "h-0.5": true,
    "w-5": true,
    "bg-black": true,
    block: true,
    transition: true,
    transform: true,
    "opacity-0": open
  });

  const hamburger3Class = ClassNames({
    "h-0.5": true,
    "w-5": true,
    "bg-black": true,
    block: true,
    transition: true,
    transform: true,
    "-rotate-45": open,
    "-translate-y-2": open,
  });

  const handleMenuClick = () => {
    handleMenu(!open);
  };

  return (
    <header className="border-b p-2 flex justify-between">
      <div className="flex">
        <button
          className="p-0 h-5 w-5 focus:outline-none flex flex-col justify-around mr-4 my-auto md:hidden"
          onClick={handleMenuClick}
        >
          <span className={hamburger1Class}></span>
          <span className={hamburger2Class}></span>
          <span className={hamburger3Class}></span>
        </button>
        <h1 className="text-2xl font-bold">abc</h1>
      </div>
      <nav>
        <ul className="list-none hidden md:flex justify-around space-x-5">
          <li>bbb</li>
          <li>bbb</li>
          <li>bbb</li>
          <li>bbb</li>
          <li>bbb</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
