import React from "react";

const Book = () => {
  return (
    <div className="book relative h-64 w-48 rounded-br-sm">
      <div className="front h-full w-full flex flex-col
      ">
        <div className="upper-half h-3/5 bg-neutral-800"></div>
        <div className="lower-half h-2/5 bg-neutral-100"></div>
      </div>
      <div className="side absolute left-0">
        <div className="upper-half h-3/5 bg-neutral-800"></div>
        <div className="lower-half h-2/5 bg-neutral-100"></div>
      </div>


    </div>
  );
};

export default Book;
