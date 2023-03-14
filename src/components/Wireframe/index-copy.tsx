// import { Canvas, extend } from '@react-three/fiber'
// import { shaderMaterial, OrthographicCamera, Stats } from '@react-three/drei'
// import * as easings from 'd3-ease'
// import { useTrailTexture } from '../src/components/Wireframe/useTrailTexture'
// import { Color, DoubleSide } from 'three'
// import { useControls } from 'leva'

// const DisplaceMaterial = shaderMaterial(
//   { map: null, color: new Color('turquoise'), color2: new Color('magenta'), amount: 1 },
//   `
//     uniform sampler2D map;
//     uniform float amount;

//     varying float vDisplace;
//     void main() {
//       float displace = texture2D(map, uv).r;
//       vDisplace = displace;

//       vec3 pos = position;
//       pos.z += displace * amount;

//       gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//     }
//   `,
//   `
//     uniform vec3 color;
//     uniform vec3 color2;

//     varying float vDisplace;
//     void main() {
//       vec3 col = mix(color, color2, vDisplace);
//       gl_FragColor.rgba = vec4(col, 1.0);
//     }
//   `
// )
// extend({ DisplaceMaterial })

// function Thing(props: any) {
//   const { debug, ease, ...conf } = useControls('Trail', {
//     size: { value: 64, min: 8, max: 256, step: 8 },
//     radius: { value: 0.3, min: 0, max: 1 },
//     maxAge: { value: 750, min: 300, max: 1000 },
//     interpolate: { value: 0, min: 0, max: 2, step: 1 },
//     smoothing: { value: 0, min: 0, max: 0.99, step: 0.01 },
//     minForce: { value: 0.3, min: 0, max: 1, step: 0.1 },
//     intensity: { value: 0.2, min: 0, max: 1, step: 0.1 },
//     blend: { value: 'screen', options: ['source-over', 'screen'] },
//     ease: { value: 'easeCircleOut', options: Object.keys(easings) },
//     debug: false
//   })
//   const disp = useControls('Displacement', {
//     amount: { value: 0.1, min: 0, max: 0.5 }
//   })

//   const { texture, onMove } = useTrailTexture({ ...conf, ease: easings[ease] })
//   // console.log(DisplaceMaterial.key,texture,DoubleSide, disp)

//   return (
//     <>
//       <mesh onPointerMove={onMove} {...props}>
//         <planeGeometry args={[1, 1, 32, 32]} />
//         {/* {debug && <meshBasicMaterial map={texture} />} */}
//         <displaceMaterial key={DisplaceMaterial.key} map={texture} side={DoubleSide} {...disp} wireframe />
//       </mesh>
//     </>
//   )
// }

// export default function Wireframe() {
//   return (
//     <Canvas>
//       <group rotation-x={-Math.PI * 0.3}>
//         <Thing  scale={2000} />
//       </group>
//       <OrthographicCamera makeDefault far={10000} near={0.001} position={[0, 0, 1000]} />
//       <Stats />
//     </Canvas>
//   )
// }

export{}
