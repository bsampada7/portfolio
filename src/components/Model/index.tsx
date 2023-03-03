import React from "react";
import { PivotControls, Stage, TransformControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: any
  materials: any
}

declare global {
  interface Window { scene: any; }
}
// const test = Partial<CenterProps> | undefined

export function Model(props: any) {
  const { nodes, materials } = useGLTF("http://localhost:3000/model/me6.glb") as GLTFResult;
  window.scene = useThree(state => state.scene);

  return (
    <>
      {/* <PivotControls> */}
      <group {...props} dispose={null}>
        <Stage preset={"upfront"}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand000.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand001.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand002.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand003.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand004.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand005.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand006.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand007.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand008.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand009.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand010.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand011.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand012.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand013.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand014.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand015.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand016.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand017.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand018.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand019.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand020.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head1_HairStrand021.geometry}
            material={materials.Sally_hair}
            position={[-0.1, 4.29, 0.24]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.01}
          />
          <mesh
            name="FBHead"
            castShadow
            receiveShadow
            geometry={nodes.FBHead.geometry}
            material={materials.FBHead_preview_mat}
            morphTargetDictionary={nodes.FBHead.morphTargetDictionary}
            morphTargetInfluences={nodes.FBHead.morphTargetInfluences}
            position={[-0.18, 4.46, 0.25]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
            scale={0.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ch29.geometry}
            material={materials["Ch29_Body.002"]}
            position={[-0.28, 0.4, 0.25]}
            rotation={[1.57, -0.01, -1.49]}
            scale={0.03}
          />
        </Stage>
      </group>
      {/* </PivotControls> */}
    </>
  );
}

useGLTF.preload("http://localhost:3000/model/me6.glb");
