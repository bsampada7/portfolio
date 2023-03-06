import React from "react";
import ProgressBar from "../ProgressBar";

const skills = [
  { name: "React", level: '8/12' },
  { name: "Three.js", level: '6/12' },
  { name: "Laravel", level: '5/12' },
  { name: "Node.js", level: '6/12' },
  { name: "HTML CSS", level: '10/12' },
  { name: "JavaScript", level: '9/12' },
  { name: "TypeScript", level: '8/12' }
]

const About = () => {
  return (
    <div className="pointer-events-none">
      <div className="greeting text-primary absolute top-24 left-10 w-6/12">
        <div className="text-3xl font-bold mb-4">
          <span>About</span>
        </div>
        <div>
          <div className="p-2 border-secondary border rounded-lg mb-4 w-fit">I am enthusiastic about interactive 3D in web</div>
          <div className=" p-2 border-secondary border rounded-lg mb-4 text-right w-fit max-w-11/12 ml-auto">Currently a student studying MS in CS, I am looking for a summer internship</div>
          <div className="p-2 border-secondary border rounded-lg mb-4 w-fit">I have worked professionally with the following techonologies in the past</div>
        </div>

        {/* <div className="text-3xl font-bold ">
          <span>Skills</span>
        </div> */}
        <div className="flex flex-col text-2xl mt-4">
          <>
            {skills.map(skill =>
              <div className="flex gap-20 justify-between items-center">
                <span>{skill.name}</span>
                <ProgressBar widthClass={`w-${skill.level}`} />
              </div>
            )}
          </>
        </div>
      </div>
    </div>

  );
};

export default About;
