import Link from "next/link";
import React, { useEffect } from "react";

const Nav = () => {

  useEffect(() => {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e: any) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e: any) => {
        e.target.classList.remove('active');
      });

      // // Initial animation
      // setTimeout(() => {
      //   span.classList.add('active');
      // }, 750 * (idx + 1))
    });
  }, []);

  return (
    // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    <div className="flex justify-between fixed top-0 w-full z-50
   
    text-primary p-4">
      <div>
        <div className="word">
          <span>S</span>
          <span>A</span>
          <span>M</span>
          <span>P</span>
          <span>A</span>
          <span>D</span>
          <span>A</span>
          <span className="font-bold text-5xl bg-secondary ml-1 w-2 h-2 rounded-lg"></span>
        </div>
        {/* <div className="word">
          <span>B</span>
          <span>H</span>
          <span>U</span>
          <span>J</span>
          <span>E</span>
          <span>L</span>
        </div> */}
      </div>
      {/* <span> Sampada logo</span> */}

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
