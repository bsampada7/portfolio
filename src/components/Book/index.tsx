import React from "react";
import Level from "../Texts/Level";
import Major from "../Texts/Major";
import Name from "../Texts/Name";

const Book = () => {

  return (
    <div className="book relative h-96 w-64 rounded-br-sm">
      <div className="book-cover relative h-full w-full">
        <div className="back absolute h-full w-full bg-neutral-100"></div>
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
      </div>
      <div className="side absolute left-0">
        <div className="upper-half h-3/5 bg-neutral-800"></div>
        <div className="lower-half h-2/5 bg-neutral-100"></div>
      </div>
      <div className="side-bar">
        <div className="upper-half h-3/5 bg-neutral-800"></div>
        <div className="lower-half h-2/5 bg-neutral-100"></div>
      </div>
    </div>
  );
};

export default Book;
