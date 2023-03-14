import { MyStoreContext } from "@/store/mystore";
import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useContext } from "react";
import { Model } from "../Model";

const ThreeCanvas = () => {


  return (
    <div className="absolute w-full mx-auto h-[100vh] top-0 left-0">
      {/* <Canvas shadows className="bg-[lavenderblush]">
        <Suspense fallback={null}>
          <ScrollControls pages={1}>
            <Model />
          </ScrollControls>
        </Suspense>
        <fog attach="fog" args={['lightpink', 60, 100]} />
      </Canvas> */}
      <Model />
      {/* <Environment preset="forest" /> */}

    </div>
  );
};

export default ThreeCanvas;
