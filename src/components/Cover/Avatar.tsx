import useScrollData from "@/utils/hooks/useScrollData";
import { useGLTF, useIntersect } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: any
  materials: any
}

export default function Avatar() {
  const { nodes, materials } = useGLTF("/model/test.gltf") as GLTFResult;
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible)) as any
  const { height } = useThree((state) => state.viewport)

  const [scrollPosition1, delta1] = useScrollData(0)
  const [scrollPosition2, delta2] = useScrollData(1)

  useEffect(() => {
    if (!(ref?.current)) return
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, (-scrollPosition1 - 1.5), 4, delta1)
    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, (3 * scrollPosition1), 4, delta1)
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, 0.5 * height * scrollPosition2 + 3.5 * scrollPosition2 - 3.5, 4, delta2)
    ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, (-0.1 * scrollPosition1 + 1.3), 4, delta1)
    ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, (-0.1 * scrollPosition1 + 1.3), 4, delta1)
    ref.current.scale.z = THREE.MathUtils.damp(ref.current.scale.z, (-0.1 * scrollPosition1 + 1.3), 4, delta1)
  }, [scrollPosition1, scrollPosition2]);

  return (
    <group rotation={[0, -1.5, 0]} position={[0, -3.5, 0]} scale={[1.3, 1.3, 1.3]} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_hair.geometry}
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
        castShadow
        receiveShadow
        geometry={nodes.FBHead.geometry}
        material={materials.FBHead_preview_mat}
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
    </group>
  )
}