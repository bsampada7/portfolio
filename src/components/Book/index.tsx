import React, { useEffect, useState } from "react";
import Level from "../Texts/Level";
import Major from "../Texts/Major";
import Name from "../Texts/Name";

// const text = "I study at Miami University \n test test"
// let textLength = 0;
// let mutext = ''
// let timeout: any
// let interval: any

const Book = () => {


  // useEffect(() => {
  //   timeout = setTimeout(() => {
  //     const target = document.getElementById('text')
  //     console.log('here')
  //     if (target) {
  //       interval = setInterval(() => {
  //         mutext = text.substring(0, textLength++)
  //         console.log(mutext);

  //         target.innerHTML = mutext
  //       }, 200);
  //     }
  //   }, 2000);

  //   return (() => {
  //     clearTimeout(timeout)
  //     clearInterval(interval)
  //   })
  // }, []);


  return (
    <div className="book relative h-96 w-64 rounded-br-sm">
    

      <div className="side-bar">
        <div className="upper-half h-3/5 bg-neutral-800"></div>
        <div className="lower-half h-2/5 bg-neutral-100"></div>
      </div>
      {/* <div className="page-1">
        <div className="page-1-front absolute h-full w-full bg-neutral-100 p-4 top-0">
          <img src="images/mu-1.png" alt="Miami University Logo" className="w-16 m-auto"></img>
          <div className="mt-2 text-xs">
            <span className="font-bold text-miami">Miami University</span>
            <br />
            <span>MS in Computer Science</span>
            <br />
            <span>August 2022 - May 2024 (Expected)</span>
            <br />
            <span>Cumulative GPA: 4.0</span>
          </div>
          <div className="text-xs mt-2 ml-20 mb-10 ">
            <span className="font-bold text-miami">Thesis: </span>
            <br />
            <span className="text-xs">View Synthesis using MSI from monocular spherical images</span>
            <br />
            <span>Advisor: </span>
            <span>Dr. John Femiani</span>

          </div>
          <div className="mt-2 text-xs">
            <span className="font-bold text-miami">CourseWorks</span>
            <ul className="text-xxs list-disc list-inside">
              <li>CSE565 - Comparative Programming Languages</li>
              <li>CSE589 - Game Engine Design</li>
              <li>CSE620 - Computer Vision</li>
              <li>CSE667 - Cryptography</li>
              <li>CSE627 - Machine Learning</li>
              <li>CSE601 - Computer Science Research Methods</li>
            </ul>

          </div>
          {/* <div>
            <span id='text'></span>
            <div className='console-underscore inline-block' id='console'>&#95;</div>
          </div> */}

        {/* </div>

      </div>

      <div className="plane-animation w-40 h-28  absolute top-36 -left-20 z-10">
        <img src="images/usa.webp" alt='USA' className="absolute w-4 right-0"></img>
        <img src="images/nepal.svg" alt='Nepal' className="absolute w-4 bottom-0"></img>
        <svg width="160" height="112" viewBox="0 0 160 112" xmlns="http://www.w3.org/2000/svg" className="col-span-3">
          <g>
            <path
              vectorEffect="non-scaling-stroke"
              strokeDasharray={5}
              id="plane-path-svg" strokeLinecap="round" fontSize="9pt" stroke="#262626" strokeWidth="0.2mm" fill="none"
              d="M4,108 C29,48 76,8 157,3" />
          </g>
        </svg>
        <img src="images/plane.png" alt='plane' className="plane-image absolute w-14 top-0 left-0"></img>
      </div> */} 
      <div className="book-cover relative h-full w-full">
        <div className="back absolute h-full w-full bg-neutral-100 p-4">
          <img src="images/tu.png" alt="Tribhuvan University Logo" className="w-8 m-auto"></img>
          <div className="mt-2 text-xs">
            <span className="font-bold text-miami">Tribhuvan University</span>
            <br />
            <span>BEng. Electronics and Communication</span>
            <br />
            <span>November 2014 - September 2018</span>
          </div>

          <div className="mt-2 text-xs">
            <span className="font-bold text-miami">CourseWorks</span>
            <ul className="text-xxs list-disc list-inside">
              <li>Computer Programming</li>
              <li>Object Oriented Programming</li>
              <li>Big Data</li>
              <li>Discrete Mathematics</li>
              <li>Artificial Intelligence</li>
              <li>Image Processing</li>
              <li>Prbability and Statistics</li>
            </ul>
          </div>

          <div className="mt-2 text-xs">
            <span className="font-bold text-miami">Activities</span>
            <ul className="text-xxs list-disc list-inside">
              <li>Class Representative - BEX 2014 (2014 - 2018)</li>
              <li>Event Coordinator - LOCUS 2018</li>
              <li>Master of Ceremony / Volunteer - IOE Robocon 2016</li>
              <li>Organizer - Collegiate Quiz, LOCUS 2017</li>
            </ul>
          </div>
        </div>

        <div className="front absolute h-full w-full flex flex-col bg-neutral-100">
          <div className="upper-half h-3/5 bg-neutral-800 flex items-center">
            <span className="text-rose-300 m-auto">My Education Journey</span>
          </div>
          <div className="lower-half h-2/5 bg-neutral-100 flex items-center justify-center">
            <div className="m-4 text-xs text-neutral-800 border-rose-300 border rounded-lg p-2 grid gap-0 grid-cols-4 grid-rows-3">
              <span className="font-bold ml-auto pr-1">Name:</span>
              <Name />
              <span className="font-bold ml-auto pr-1">Level:</span>
              <Level />
              <span className="font-bold ml-auto pr-1">Major:</span>
              <Major />
            </div>
          </div>
        </div>
        <div className="side absolute left-0">
          <div className="upper-half h-3/5 bg-neutral-800"></div>
          <div className="lower-half h-2/5 bg-neutral-100"></div>
        </div>
      </div>

    </div>
  );
};

export default Book;
