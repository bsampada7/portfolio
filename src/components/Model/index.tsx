import { MyStoreContext } from "@/store/mystore";
import { ScrollPage } from "@/store/mystorereducer";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import About from "../About";
import Introduction from "../Introduction";

type GLTFResult = GLTF & {
  nodes: any
  materials: any
}

declare global {
  interface Window { scene: any; }
}
let scale = 1.1

export function Model(props: any) {
  const { nodes, materials } = useGLTF("http://localhost:3000/model/me6.glb") as GLTFResult;
  const scroll = useScroll()
  const group = useRef<any>(null)
  const spotlight = useRef<any>(null)
  const languages = useRef<any>(null)
  const introduction = useRef<any>(null)
  const skills = useRef<any>(null)
  const { state, dispatch } = useContext(MyStoreContext);
  const { menuOpen } = state;

  const [x, setx] = useState(0);


  useFrame((_, delta) => {
    const r1 = scroll.range(0, 1)
    const r2 = scroll.range(1 / 2, 1)
    const r3 = scroll.range(7 / 10, 1)

    if (group.current) {
      if (menuOpen) {
        group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, -0.5, 2, delta)
        group.current.position.x = THREE.MathUtils.damp(group.current.position.x, -1.5, 2, delta)
      }
      else {
        group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, (-r1 - 1.5), 4, delta)
        group.current.position.x = THREE.MathUtils.damp(group.current.position.x, (3 * r1), 4, delta)
        group.current.scale.x = THREE.MathUtils.damp(group.current.scale.x, (-0.1 * r1 + 1.3), 4, delta)
        group.current.scale.y = THREE.MathUtils.damp(group.current.scale.y, (-0.1 * r1 + 1.3), 4, delta)
        group.current.scale.z = THREE.MathUtils.damp(group.current.scale.z, (-0.1 * r1 + 1.3), 4, delta)
      }

    }
    if (menuOpen) {
      setx(THREE.MathUtils.damp(x, -5, 2, delta))
    } else {
      setx(THREE.MathUtils.damp(x, (8 * r1), 4, delta))

    }
    scale = THREE.MathUtils.damp(scale, (-0.1 * r1 + 1.1), 4, delta)
    if (languages.current) {
      languages.current.classList.toggle('slideleft', menuOpen)
      if (!menuOpen) {
        languages.current.classList.toggle('flyout', r2)
      }
    }

    if (introduction.current) {
      if (!menuOpen) {
        introduction.current.classList.toggle('show', !r2)
        // introduction.current.position.y = THREE.MathUtils.damp(group.current.position.x, (3 * r1), 4, delta)
      }
    }
    if (skills.current) {
      if (!menuOpen) {
        skills.current.classList.toggle('show', r3)
      }
    }
  })

  useEffect(() => {
    if (spotlight.current) {
      spotlight.current.shadow.bias = -0.0001
      spotlight.current.blurSamples = 8
      spotlight.current.focus = 1
    }
  }, []);


  return (
    <>
      <>
        <spotLight position={[0, 4.729254238806093, 2.3646271194030466]}
          intensity={0.5} decay={2} angle={1.0471975511965976} penumbra={1}

        />
        <pointLight intensity={0.5} position={[-2.3646271194030466, 1.1823135597015233, -3.54694067910457]} />
        <directionalLight castShadow intensity={0.5}>
          <orthographicCamera args={[-10, 10, 10, -10, 0.5, 30]} />
        </directionalLight>
        <ambientLight intensity={1 / 3}></ambientLight>

        <group rotation={[0, -1.5, 0]} position={[0, -3.5, 0]} scale={[1.3, 1.3, 1.3]} dispose={null} ref={group}>
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
        </group>
      </>

      <Html
        transform
        position={[x, -0.5, -7.9]}
        scale={[scale, scale, scale]}
        portal={{ current: scroll.fixed }}
        occlude='blending'
      >
        <div className="bg-circle-new">
        </div>
      </Html>

      <Html
        transform
        position={[0, -0.6, -7.9]}
        portal={{ current: scroll.fixed }}
        occlude='blending'
      >

        <div className="w-[100vw] h-[100vh] relative languages" ref={languages}>
          <div className="text-3xl font-bold absolute top-32 right-64 ">
            <span className="gradient-text float1">{"<React/>"}</span>
          </div>
          <div className="text-3xl font-bold absolute bottom-32 right-[20%]">
            <span className="gradient-text float2">{"Node.js"}</span>
          </div>
          <div className="text-3xl font-bold absolute top-[15%] left-[35%]">
            <span className="gradient-text float3">{"Next.js"}</span>
          </div>
          <div className="text-3xl font-bold absolute top-[40%] right-[10%]">
            <span className="gradient-text float4">{"Android"}</span>
          </div>
          <div className="text-3xl font-bold absolute bottom-[13%] left-[35%]">
            <span className="gradient-text float5">{"Python"}</span>
          </div>
        </div>
      </Html>

      <Html
        transform
        position={[0, -0.6, -7.9]}
        portal={{ current: scroll.fixed }}
        occlude='blending'
      >
        <div className="introduction w-[100vw] h-[100vh] relative" ref={introduction}>
          <Introduction />
          {/* <About /> */}

        </div>

      </Html>
      <Html
        transform
        position={[0, -0.6, -7.9]}
        portal={{ current: scroll.fixed }}
        occlude='blending'
      >
        <div className="skills w-[100vw] h-[100vh] relative" ref={skills} >
          <About />
        </div>
      </Html>

    </>
  );
}

useGLTF.preload("http://localhost:3000/model/me6.glb");
