import useScrollData from "@/utils/hooks/useScrollData";
import { useEffect } from "react";

let maxScrollPos = 0

const Experience = () => {
  const [scrollPosition, _] = useScrollData(2)

  useEffect(() => {
    maxScrollPos = Math.max(scrollPosition, maxScrollPos)
  }, [scrollPosition]);


  return (
    <div className="timeline flex flex-col w-full h-full gap-4 relative pointer-events-strict" onMouseMove={(e) => e.stopPropagation()}>
      <div className="text-3xl font-bold mb-4 text-primary mx-auto mt-12">
        <span>Experience</span>
      </div>
      <ul>
        <li className={maxScrollPos > 0.2 ? "in-view" : ''}>
          <div>
            <time>2018</time>
            <div className="discovery" onMouseMove={(e) => e.stopPropagation()}>
              <h1 className="text-primary text-xl font-bold">LIS Nepal Pvt. Ltd.</h1>
              <span className="flex flex-row gap-2">
                <img src="icons/location-filled.svg" className="w-6 h-6 inline-block"></img>
                <span>Kathmandu, Nepal</span>
              </span>
              <p>
                Software Engineering Intern
              </p>
              <p>
                HTML, CSS, JavaScript, CodeIgniter
              </p>
            </div>
          </div>
        </li>
        <li className={maxScrollPos > 0.45 ? "in-view" : ''}>
          <div>
            <time>2019-2022</time>
            <div className="discovery">
              <h1 className="text-primary text-xl font-bold">Alternative Technology</h1>
              <span className="flex flex-row gap-2">
                <img src="icons/location-filled.svg" className="w-6 h-6 inline-block"></img>
                <span>Kathmandu, Nepal</span>
              </span>
              <p>
                Software Engineer
              </p>
              <p>
                React.js, Three.js, TS, JS, SCSS
              </p>
            </div>
          </div>
        </li>
        <li className={maxScrollPos > 0.7 ? "in-view" : ''}>
          <div>
            <time>2022-Present</time>
            <div className="discovery">
              <h1 className="text-primary text-xl font-bold">Myaamia Center</h1>
              <span className="flex flex-row gap-2">
                <img src="icons/location-filled.svg" className="w-6 h-6 inline-block"></img>
                <span>Miami University, Oxford, OH, USA</span>
              </span>
              <p>
                Full Stack Developer
              </p>
              <p>
                Laravel, Javascript, Android, Swift
              </p>
            </div>
          </div>
        </li>
        <li className={maxScrollPos > 0.9 ? "in-view" : ''}>
          <div>
            <time>2023(Summer)</time>
            <div className="discovery">
              <h1 className="text-primary text-xl font-bold">Summer Internship</h1>
              <p>
                Looking for a challeging and growing internship experience
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
