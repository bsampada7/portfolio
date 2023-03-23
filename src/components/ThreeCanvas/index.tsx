import { MyStoreContext } from "@/store/mystore";
import { numberofPages } from "@/utils/hooks/useScrollData";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext } from "react";
import { Cover } from "../Cover";
import Education from "../Education";
import Experience from "../Experience";
import Projects from "../Projects";
import EnvSettings from "./EnvSettings";

declare global {
  interface Window { scene: any; }
}

const ThreeCanvas = () => {
  const { state, _ } = useContext(MyStoreContext);

  return (
    <div className={`absolute w-full mx-auto h-[100vh] top-0 left-0 z-0 `}>
      <Canvas className={state.canvasClass}>
        <EnvSettings />
        <ScrollControls pages={numberofPages}>
          {/* <Scroll> */}
            <Cover />
          {/* </Scroll> */}
          <Scroll html>
            <section id='Education' className="absolute w-[100vw] top-[200vh] education max-w-[92rem] h-[100vh] flex items-center justify-center">
              <Education />
            </section>
            <section id='Experience' className="absolute w-[100vw] top-[300vh] experience max-w-[92rem] h-[100vh] flex items-center justify-center">
              <Experience />
            </section>
            <section id='Projects' className="absolute w-[100vw] top-[400vh] project max-w-[92rem] h-[100vh] flex items-center justify-center overflow-auto">
              <Projects />
            </section>
            <section id='Contact' className="absolute w-[100vw] top-[500vh] contac max-w-[92rem] h-[100vh] flex items-center justify-center">
              {/* <Contact /> // will be rendered inside this div using javascript*/}
            </section>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
