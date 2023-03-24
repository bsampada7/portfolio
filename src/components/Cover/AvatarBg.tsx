import useScrollData from "@/utils/hooks/useScrollData";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';

export default function AvatarBg() {
  const { height } = useThree((state) => state.viewport)
  const [scale, setscale] = useState(1.1);
  const [positionX, setpositionX] = useState(0);
  const [positionY, setpositionY] = useState(-0.5);
  const { gl } = useThree();
  const ref = useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement)

  const [scrollPosition1, delta1] = useScrollData(0)
  const [scrollPosition2, delta2] = useScrollData(1)

  useEffect(() => {
    setpositionX(THREE.MathUtils.damp(positionX, (6 * scrollPosition1), 4, delta1))
    setpositionY(THREE.MathUtils.lerp(-0.5, 1 * height, scrollPosition2 * 1.5))
    setscale(THREE.MathUtils.damp(scale, (-0.1 * scrollPosition1 + 1.1), 4, delta1))
  }, [scrollPosition1, scrollPosition2]);



  return (
    <Html
      transform
      position={[positionX, positionY, -4]}
      scale={[scale, scale, scale]}
      portal={ref || undefined}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict"}
    >
      <div className="bg-circle bg-gradient-to-t to-secondary from-primary pointer-events-none rounded-half max-w-xs w-[20vw] pb-[20vw]">
      </div>
    </Html>
  )
}