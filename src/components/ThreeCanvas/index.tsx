import { numberofPages } from "@/utils/hooks/useScrollData";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Contact from "../Contact";
import { Cover } from "../Cover";
import EnvSettings from "./EnvSettings";
import Education from "../Education";
import Experience from "../Experience";
import Projects from "../Projects";
import { useContext } from "react";
import { MyStoreContext } from "@/store/mystore";

const ThreeCanvas = () => {
  const { state, _ } = useContext(MyStoreContext);

  return (
    <div className="absolute w-full mx-auto h-[100vh] top-0 left-0">
      <Canvas className={state.canvasClass}>
        <EnvSettings />
        <ScrollControls pages={numberofPages} >
          <Cover />
          <Scroll html>
            <section id='Education' className="absolute w-[100vw] top-[200vh] education bg-gray-light max-w-[92rem] h-[100vh] flex items-center justify-center">
              <Education />
            </section>
            <section id='Experience' className="absolute w-[100vw] top-[300vh] experience bg-transparent max-w-[92rem] h-[100vh] flex items-center justify-center">
              <Experience />
            </section>
            <section id='Projects' className="absolute w-[100vw] top-[400vh] projects bg-gray-light max-w-[92rem] h-[100vh] flex items-center justify-center overflow-auto">
              <Projects />
            </section>
            <section id='Contact' className="absolute w-[100vw] top-[500vh] contact bg-gray-light max-w-[92rem] h-[100vh] flex items-center justify-center">
              <Contact />
            </section>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
