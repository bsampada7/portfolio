import { Environment, Point, PointMaterial, Points, ScrollControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Model } from "../Model";
import Wireframe from "../Wireframe";
import { MathUtils } from 'three'
import TextCover from "../TextCover";

const positions = Array.from({ length: 500 }, (i) => [
  MathUtils.randFloatSpread(10),
  MathUtils.randFloatSpread(10),
  MathUtils.randFloatSpread(10),
])

// const textPositions = Array.from({ length: 5 }, (i) => [
//   MathUtils.randFloat(10,100),
//   MathUtils.randFloat(10,),
// ])

const Introduction = () => {
  return (
    <section className="introduction bg-gray-light w-full h-full flex">
      <div className="greeting text-primary absolute top-20 left-10">
        <div className="text-9xl font-bold ">
          <span>H</span>
          <span>I</span>
          <span className="flicker">!</span>
        </div>
        <div className="text-5xl mt-4">I am Sampada Bhujel</div>
        <div className="text-3xl mt-4">A full stack developer with over<br /> <strong className="text-secondary">3 years</strong> experience</div>
      </div>
      <div className="text-3xl font-bold absolute top-32 right-64 gradient-text">{"<React/>"}</div>
      <div className="text-3xl font-bold absolute bottom-32 right-96 gradient-text">{"Node.js"}</div>
      <div className="text-3xl font-bold absolute top-32 right-64 gradient-text">{"Next.js"}</div>
      <div className="text-3xl font-bold absolute top-32 right-64 gradient-text">{"Android"}</div>
      <div className="text-3xl font-bold absolute top-32 right-64 gradient-text">{"Python"}</div>

      {/* <div id="test"></div> */}

      <Canvas shadows>
        {/* <Wireframe /> */}

        <Suspense fallback={null}>
          <ScrollControls pages={2}>
            <Model
            />
          </ScrollControls>
        </Suspense>
        <fog attach="fog" args={['lightpink', 60, 100]} />
        <Environment preset="city" />

        {/* <Points limit={positions.length} range={100}>
          <PointMaterial transparent vertexColors size={15} sizeAttenuation={false} depthWrite={false} />
          {positions.map((position, i) => (
            <PointEvent key={i} position={position} />
          ))}
        </Points> */}

        {/* <Points limit={positions.length} range={100}>
          <PointMaterial transparent vertexColors size={15} sizeAttenuation={false} depthWrite={false} />
          {positions.map((position, i) => (
            <PointEvent key={i} position={position} />
          ))}
        </Points> */}

      </Canvas>

    </section>
  );
}

function PointEvent(props: any) {
  const [hovered, setHover] = useState(false)
  const [clicked, setClick] = useState(false)
  return (
    <Point
      {...props}
      color={clicked ? 'hotpink' : hovered ? 'white' : 'orange'}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
      onClick={(e) => (e.stopPropagation(), setClick((state) => !state))}
    />
  )
}

export default Introduction;
