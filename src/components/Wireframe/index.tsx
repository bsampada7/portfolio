import { Mask, Point, PointMaterial, Points, shaderMaterial, useMask, useScroll, useTrailTexture } from "@react-three/drei";
import { useControls } from "leva";
import React, { useRef, useState } from "react";
import { DoubleSide, MathUtils, Color, ShaderMaterial } from "three";
import * as easings from 'd3-ease'
import { extend, ReactThreeFiber, useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'



const config1 = {
  size: 64,
  radius: 0.2,
  maxAge: 750,
  interpolation: 0,
  smoothing: 0.8,
  minforce: 0.3,
  intensity: 0.1,
  blend: 'screen' as CanvasRenderingContext2D['globalCompositeOperation'],
  ease: (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2))
}

const disp = { amount: 0.05 }

// secondary: "#e000ff",
// primary: "#8401ff",
// #273444

const DisplaceMaterial = shaderMaterial(
  { map: null, color: new Color('#e000ff'), color2: new Color('#8401ff'), amount: 1 },
  `
    uniform sampler2D map;
    uniform float amount;

    varying float vDisplace;
    void main() {
      float displace = texture2D(map, uv).r;
      vDisplace = displace;

      vec3 pos = position;
      pos.z += displace * amount;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    uniform vec3 color;
    uniform vec3 color2;

    varying float vDisplace;
    void main() {
      vec3 col = mix(color, color2, vDisplace);
      gl_FragColor.rgba = vec4(col, 1.0);
    }
  `
)
extend({ DisplaceMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'displaceMaterial': any
    }
  }
}

const positions = Array.from({ length: 500 }, (i) => [
  MathUtils.randFloatSpread(100),
  MathUtils.randFloatSpread(100),
  MathUtils.randFloat(-15, -10),
])

const Wireframe = (props: any) => {
  // const { blend, ...config } = useControls('Trail', {
  //   size: { value: 64, min: 8, max: 256, step: 8 },
  //   radius: { value: 0.3, min: 0, max: 1 },
  //   maxAge: { value: 750, min: 300, max: 1000 },
  //   interpolate: { value: 0, min: 0, max: 2, step: 1 },
  //   smoothing: { value: 0, min: 0, max: 0.99, step: 0.01 },
  //   minForce: { value: 0.3, min: 0, max: 1, step: 0.1 },
  //   intensity: { value: 0.2, min: 0, max: 1, step: 0.1 },
  //   blend: { value: 'screen', options: ['source-over', 'screen'] },
  //   // ease: { value: 'easeCircleOut', options: Object.keys(easings) },
  // })

  // const disp = useControls('Displacement', {
  //   amount: { value: 0.1, min: 0, max: 0.5 }
  // })
  // console.log(disp)

  // const blend1 = blend as CanvasRenderingContext2D['globalCompositeOperation']
  // const [texture, onMove] = useTrailTexture({ ...config, blend: blend1 })
  const [texture, onMove] = useTrailTexture(config1)
  const { width, height } = useThree((state) => state.viewport)
  const stencil = useMask(1)
  const ref = useRef<any>(null)
  const scroll = useScroll()
  const numberofPages = 5;

  useFrame((state, delta) => {
    if (!(ref?.current)) return
    // ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    // const r1 = scroll.range(2/numberofPages, 3 / numberofPages)
    const r2 = scroll.range(3 / numberofPages, 4 / numberofPages)
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, -1.2 * height * r2 , 4, delta)
  })

  return (
    <>
      <Mask id={1} position={[0, -0 * height, -1]}>
        <planeGeometry args={[1.2 * width, 1.2 * height, 1, 1]} />
      </Mask>
      <mesh onPointerMove={onMove} scale={[1, 1, 1]} position={[0, -0 * height, -1]} rotation={[0, 0, 0.8]} {...props} ref={ref}>
        <planeGeometry args={[20, 20, 64, 64]} />
        <displaceMaterial key={DisplaceMaterial.key} map={texture} side={DoubleSide} {...disp} opacity={0.1} wireframe {...stencil}>
          {/* <plane attach="clippingPlanes-0" normal={[0, -1, 0]} constant={0} />   */}
        </displaceMaterial>
        {/* <displaceMaterial key={DisplaceMaterial.key} map={texture} side={DoubleSide} {...disp} opacity={0.1} wireframe/> */}

        {/* <meshStandardMaterial displacementMap={texture} side={DoubleSide}
          key={DisplaceMaterial.key}
          // color={'#FF0000'}
          // opacity={0.1}
          wireframe displacementScale={disp1} /> */}
      </mesh>

      {/* <Points limit={positions.length} range={400} >
        <PointMaterial transparent vertexColors size={5} sizeAttenuation={false} depthWrite={false} />
        {positions.map((position, i) => (
          <PointEvent key={i} position={position} />
        ))}
      </Points> */}
    </>

  )
};

function PointEvent(props: any) {
  const [hovered, setHover] = useState(false)
  const [clicked, setClick] = useState(false)
  return (
    <Point
      {...props}
      color={clicked ? 'hotpink' : hovered ? 'white' : '#ECF0F1'}
    // onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
    // onPointerOut={(e) => setHover(false)}
    // onClick={(e) => (e.stopPropagation(), setClick((state) => !state))}
    />
  )
}

export default Wireframe;
