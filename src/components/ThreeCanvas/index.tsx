import { MyStoreContext } from "@/store/mystore";
import { numberofPages } from "@/utils/hooks/useScrollData";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext } from "react";
import { Cover } from "../Cover";
import Avatar from "../Cover/Avatar";
import AvatarBg from "../Cover/AvatarBg";
import Education from "../Education";
import Experience from "../Experience";
import Projects from "../Projects";
import Wireframe from "../Wireframe";
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
          <AvatarBg />
          <Avatar />
          <Wireframe />
          <Scroll>
            <Cover />
          </Scroll>
          <Scroll html>
            <section id='Education' className="absolute w-[100vw] top-[200vh] education h-[100vh] flex items-center justify-center">
              <Education />
            </section>
            <section id='Experience' className="absolute w-[100vw] top-[300vh] experience h-[100vh] flex items-center justify-center">
              <Experience />
            </section>
            <section id='Projects' className="absolute w-[100vw] top-[400vh] projects h-[100vh] flex items-center justify-center overflow-auto bg-background1">
              <Projects />
            </section>
            <section id='Contact' className="absolute w-[100vw] top-[500vh] contact h-[100vh] flex items-center justify-center bg-background">
              {/* <Contact /> // will be rendered inside this div using javascript*/}
            </section>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
