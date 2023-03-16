import useScrollData from "@/utils/hooks/useScrollData";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "../ProgressBar";
import * as THREE from 'three';
import { Html } from "@react-three/drei";

const skills = [
  { name: "React", level: '8/12' },
  { name: "Three.js", level: '6/12' },
  { name: "Laravel", level: '5/12' },
  { name: "Node.js", level: '6/12' },
  { name: "HTML CSS", level: '10/12' },
  { name: "JavaScript", level: '9/12' },
  { name: "TypeScript", level: '8/12' }
]

function About() {
  const { height } = useThree((state) => state.viewport)
  const { gl } = useThree();
  const skillsRef = useRef<any>(null)
  const [positionY, setpositionY] = useState(-0.8);
  const portalRef = useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement)

  const [scrollPosition1, _] = useScrollData(0.5)
  const [scrollPosition2, delta2] = useScrollData(1)

  useEffect(() => {
    setpositionY(THREE.MathUtils.damp(positionY, 2.5 * height * scrollPosition2 + 0.5 * scrollPosition2 - 0.5, 4, delta2))
    if (skillsRef.current) {
      skillsRef.current.classList.toggle('show', scrollPosition1)
    }
  }, [scrollPosition1, scrollPosition2]);


  return (
    <Html
      transform
      position={[0, positionY, -7.9]}
      portal={portalRef || undefined}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict"}>
      <div className="skills w-[100vw] h-[100vh] relative pointer-events-none" ref={skillsRef} >
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
            <div className="flex flex-col text-2xl mt-4">
              <>
                {skills.map(skill =>
                  <div className="flex gap-20 justify-between items-center" key={skill.name}>
                    <span>{skill.name}</span>
                    {/* <ProgressBar widthClass={`w-${skill.level}`} /> */}
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </Html>
  )
}

export default About;
