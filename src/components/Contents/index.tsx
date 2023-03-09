import React from "react";
import Education from "../Education";
import Introduction from "../Introduction";
import Projects from "../Projects";

const Contents = () => {
  return (
    <div className="w-full min-h-full bg-white">
      <section id='Home' className="home bg-gray-light w-full h-[100vh] flex items-center justify-center">
        {/* <Introduction /> */}
      </section>
      <section id='Education' className="education bg-gray-light w-full h-[100vh] flex flex-col items-center justify-center">
        <Education />
      </section>
      <section id='Experience' className="experience bg-gray-light w-full h-[100vh] flex items-center justify-center">
        This is a Experience section
      </section>
      <section id='Projects' className="projects bg-gray-light w-full h-[100vh] flex items-center justify-center">
        <Projects />
      </section>
      <section id='Contact' className="contact bg-gray-light w-full h-[100vh] flex items-center justify-center">
        This is a Contact section
      </section>
    </div>
  );
};

export default Contents;
