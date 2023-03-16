import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
  const scroll = useScroll()
  useFrame((state, delta) => {
    const r1 = scroll.range(0, 1)
    const calc = Math.max((r1 / 0.25) - 2, 0)
    
  })

  return (
    <div className="timeline flex flex-col w-full h-full gap-4 relative">
      <ul>
        <li className="in-view">
          <div>
            <time>2018</time>
            <div className="discovery">
              <h1 className="text-primary">LIS Nepal Pvt. Ltd.</h1>
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
            {/* <div className="scientist">
              <h1>Scientist</h1>
              <span>Newton</span>
            </div> */}
          </div>
        </li>
        <li className="in-view">
          <div>
            <time>2019-2022</time>
            <div className="discovery">
              <h1 className="text-primary">Alternative Technology</h1>
              <p>
                Software Engineer
              </p>
              <p>
                React.js, Three.js, Typescript, Javascript, SCSS
              </p>
            </div>
          </div>
        </li>
        <li className="in-view">
          <div>
            <time>2022-Present</time>
            <div className="discovery">
              <h1 className="text-primary">Myaamia Center, Miami university</h1>
              <p>
                Full Stack Developer
              </p>
              <p>
                Laravel, Javascript, Android Development, Swift
              </p>
            </div>
          </div>
        </li>
        <li className="in-view">
          <div>
            <time>2023(Summer)</time>
            <div className="discovery">
              <h1 className="text-primary">Summer Internship</h1>
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
