import useScrollData from "@/utils/hooks/useScrollData";
import useWindowSize from "@/utils/hooks/useWindowResize";
import { useGLTF, useIntersect } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
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
  const size = useWindowSize();
  const [scale, setscale] = useState(1.3);
  const [factor, setfactor] = useState(1);

  const [scrollPosition1, delta1] = useScrollData(0)
  const [scrollPosition2, delta2] = useScrollData(1)

  useEffect(() => {
    if (size.width && size.height) {
      if (size.width < 1024) {
        setfactor(0.6);
      }
      else {
        setfactor(1);
      }
    }
  }, [size]);

  useEffect(() => {
    if (!(ref?.current)) return
    if ((size.width ?? window.innerWidth) < 768) {
      ref.current.position.y = THREE.MathUtils.lerp(-3.5, 0.25 * height, scrollPosition1 * 1.5)
      if (scrollPosition1 > 0.5) {
        ref.current.visible = false
      }
      else {
        ref.current.visible = true
      }
    }
    else {
      ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, (-scrollPosition1 - 1.5), 4, delta1)
      ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, (3 * scrollPosition1), 4, delta1)
      // ref.current.position.x = THREE.MathUtils.lerp(0, 2, scrollPosition1 * 1.5)
      ref.current.position.y = THREE.MathUtils.lerp(-3.5, 0.25 * height, scrollPosition2 * 1.5)
      ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, (-0.1 * scrollPosition1 + 1.3) * factor, 4, delta1)
      ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, (-0.1 * scrollPosition1 + 1.3) * factor, 4, delta1)
      ref.current.scale.z = THREE.MathUtils.damp(ref.current.scale.z, (-0.1 * scrollPosition1 + 1.3) * factor, 4, delta1)

    }
  }, [scrollPosition1, scrollPosition2]);


  return (
    <group rotation={[0, -1.5, 0]} position={[0, -3.5, 0]} scale={scale * factor} dispose={null} ref={ref}>
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