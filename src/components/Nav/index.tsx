import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between fixed top-0 w-full
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    text-white p-4">
      <span> Sampada logo</span>
      <div className="flex gap-2">
        <Link href={"/"}>Home</Link>
        <Link href={"#Education"}>Education</Link>
        <Link href={"#Experience"}>Experience</Link>
        <Link href={"#Projects"}>Projects</Link>
        <Link href={"#Contact"}>Contact</Link>
      </div>
    </div>);
};

export default Nav;
