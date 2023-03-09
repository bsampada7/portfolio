import { MyStoreContext } from "@/store/mystore";
import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useContext } from "react";
import { Model } from "../Model";

const ThreeCanvas = () => {


  return (
    <div className="absolute w-full h-[100vh] top-0 left-0">
      <Canvas shadows className="bg-[lavenderblush]">
        <Suspense fallback={null}>
          <ScrollControls pages={0.5}>
            <Model />
          </ScrollControls>
        </Suspense>
        <fog attach="fog" args={['lightpink', 60, 100]} />
        {/* <Environment preset="forest" /> */}
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
