import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4 text-center py-2 space-y-2">
      <div className="flex items-center space-x-4 text-zinc-950 text-xl">
        <a href="#hero" className="">
          Home
        </a>
        <a href="#what-we-do" className="">
          What We Do
        </a>
        <a href="#our-work" className="">
          Our Work
        </a>
        <a href="#customers" className="">
          Customers
        </a>
        <a href="#contact-us" className="">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Nav;
