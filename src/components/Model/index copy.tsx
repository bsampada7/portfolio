import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Model(props: any) {
  const gltf = useLoader(GLTFLoader, "http://localhost:3000/model/model.glb")
  return (
    <Canvas>
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
    </Canvas>
  );
}

export default Model;



