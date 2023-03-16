import { MyStoreContext } from "@/store/mystore";
import useScrollData from "@/utils/hooks/useScrollData";
import { Mask, shaderMaterial, useMask, useTrailTexture } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import * as THREE from 'three';
import { Color, DoubleSide } from "three";


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

const config = {
  size: 64,
  radius: 0.3,
  maxAge: 750,
  interpolation: 0,
  smoothing: 0,
  minforce: 0.3,
  intensity: 0.4,
  blend: 'screen' as CanvasRenderingContext2D['globalCompositeOperation'],
  ease: (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2))
}

const disp = { amount: 0.27 }

const Wireframe = (props: any) => {
  const [texture, onMove] = useTrailTexture(config)
  const { width, height } = useThree((state) => state.viewport)
  const { state, dispatch } = useContext(MyStoreContext);
  const stencil = useMask(1)
  const ref = useRef<any>(null)
  const refmask = useRef<any>(null)

  const [scrollPosition, _] = useScrollData(2)

  useEffect(() => {
    if (!(ref?.current)) return
    ref.current.position.y = THREE.MathUtils.lerp(-1.2 * height, 0, scrollPosition)
    refmask.current.position.y = ref.current.position.y
    if (scrollPosition > 0 && state.canvasClass === "") {
      dispatch({
        type: 'Post',
        payload: { canvasClass: 'zIndexZero' }
      })
    }
    else if (scrollPosition <= 0 && state.canvasClass !== "") {
      dispatch({
        type: 'Post',
        payload: { canvasClass: '' }
      })
    }
  }, [scrollPosition]);



  return (
    <>
      <Mask id={1} position={[0, -1.2 * height, -1]} ref={refmask}>
        <planeGeometry args={[1.2 * width, 1.2 * height, 1, 1]} />
      </Mask>
      <mesh onPointerMove={onMove} scale={[1, 1, 1]} position={[0, -1.2 * height, -1]} rotation={[0, 0, 0.8]} {...props} ref={ref}>
        <planeGeometry args={[20, 20, 64, 64]} />
        <displaceMaterial key={DisplaceMaterial.key} map={texture} side={DoubleSide} {...disp} opacity={0.1} wireframe  {...stencil} >
        </displaceMaterial>
      </mesh>
    </>
  )
};


export default Wireframe;
