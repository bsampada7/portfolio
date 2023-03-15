import * as THREE from 'three'
import { Ref, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll, useGLTF, useScroll, Html } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import Introduction from "../Introduction";
import About from '../About'
import Experience from '../Experience'
import Education from '../Education'
import Wireframe from '../Wireframe'

type GLTFResult = GLTF & {
  nodes: any
  materials: any
}

const numberofPages = 5

function Avatar() {
  const { nodes, materials } = useGLTF("/model/test.gltf") as GLTFResult;
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible)) as any
  const { height } = useThree((state) => state.viewport)
  const scroll = useScroll()
  useFrame((state, delta) => {
    if (!(ref?.current)) return
    // ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    const r1 = scroll.range(0, 0.5 / numberofPages)
    const r2 = scroll.range(1 / numberofPages, 1.5 / numberofPages)
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, (-r1 - 1.5), 4, delta)
    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, (3 * r1), 4, delta)
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, 0.5 * height * r2 + 3.5 * r2 - 3.5, 4, delta)
    ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, (-0.1 * r1 + 1.3), 4, delta)
    ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, (-0.1 * r1 + 1.3), 4, delta)
    ref.current.scale.z = THREE.MathUtils.damp(ref.current.scale.z, (-0.1 * r1 + 1.3), 4, delta)
  })

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

function AvatarBg() {
  const visible = useRef(false)
  const { height } = useThree((state) => state.viewport)
  const scroll = useScroll()
  const [scale, setscale] = useState(1.1);
  const [positionX, setpositionX] = useState(0);
  const [positionY, setpositionY] = useState(-0.5);
  const { gl } = useThree();


  useFrame((state, delta) => {
    const r1 = scroll.range(0, 0.5 / numberofPages)
    const r2 = scroll.range(1 / numberofPages, 1.5 / numberofPages)
    setpositionX(THREE.MathUtils.damp(positionX, (8 * r1), 4, delta))
    setpositionY(THREE.MathUtils.damp(positionY, 2.5 * height * r2 + 0.5 * r2 - 0.5, 4, delta))
    setscale(THREE.MathUtils.damp(scale, (-0.1 * r1 + 1.1), 4, delta))
  })

  return (
    <Html
      transform
      position={[positionX, positionY, -7.9]}
      scale={[scale, scale, scale]}
      portal={{ current: gl.domElement.parentNode }}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict"}
    >
      <div className="bg-circle-new pointer-events-none">
      </div>
    </Html>
  )
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <>
      <AvatarBg />
      <Avatar />
    </>
  )
}

function EnvSettings() {
  return (
    <>
      <spotLight position={[0, 4.729254238806093, 2.3646271194030466]} intensity={0.5} decay={2} angle={1.0471975511965976} penumbra={1} />
      <pointLight intensity={0.5} position={[-2.3646271194030466, 1.1823135597015233, -3.54694067910457]} />
      <directionalLight castShadow intensity={0.5}>
        <orthographicCamera args={[-10, 10, 10, -10, 0.5, 30]} />
      </directionalLight>
      <ambientLight intensity={1 / 3}></ambientLight>
    </>
  )
}

function IntroductionHTML() {
  const scroll = useScroll()
  const { gl } = useThree();
  const introduction = useRef<any>(null)

  useFrame((state, delta) => {
    const r1 = scroll.range(1 / (2 * numberofPages), 1 / numberofPages)

    if (introduction.current) {
      introduction.current.classList.toggle('show', !r1)
    }
  })

  return (
    <Html
      transform
      position={[0, -0.6, -7.9]}
      portal={{ current: gl.domElement.parentNode }}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict"}
    >
      <div className="introduction w-[100vw] h-[100vh] relative" ref={introduction}>
        <Introduction />
      </div>
    </Html>
  )
}

function AboutHTML() {
  const scroll = useScroll()
  const { height } = useThree((state) => state.viewport)
  const { gl } = useThree();
  const skills = useRef<any>(null)
  const [positionY, setpositionY] = useState(-0.8);

  useFrame((state, delta) => {
    const r1 = scroll.range(1 / (2 * numberofPages), 1 / numberofPages)
    const r2 = scroll.range(1 / numberofPages, 1.5 / numberofPages)
    setpositionY(THREE.MathUtils.damp(positionY, 2.5 * height * r2 + 0.5 * r2 - 0.5, 4, delta))

    if (skills.current) {
      skills.current.classList.toggle('show', r1)
      // skills.current.classList.toggle('show', r1)
    }
  })

  return (
    <Html
      transform
      position={[0, positionY, -7.9]}
      portal={{ current: gl.domElement.parentNode }}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict"}
    >
      <div className="skills show w-[100vw] h-[100vh] relative pointer-events-none" ref={skills} >
        <About />
      </div>
    </Html>
  )
}

export const Model = () => (
  <Canvas>
    <EnvSettings />
    <ScrollControls pages={numberofPages} >
      <Items />
      <IntroductionHTML />
      <AboutHTML />
      <Wireframe />

      <Scroll html>
        <section id='Education' className="absolute w-[100vw] top-[200vh] education bg-gray-light max-w-[92rem] h-[100vh] flex items-center justify-center">
          <Education />
        </section>
        <section id='Experience' className="absolute w-[100vw] top-[300vh] experience bg-gray-light max-w-[92rem] h-[100vh] flex items-center justify-center">
          <Experience />
        </section>
        {/* <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
        <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
        <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
        <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
        <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
          her
          <br />
          mes.
        </h1> */}
      </Scroll>
    </ScrollControls>
  </Canvas>
)
