import useScrollData from "@/utils/hooks/useScrollData";
import useWindowSize from "@/utils/hooks/useWindowResize";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';


const factor = 1
let startPosY = -0.5

export default function AvatarBg() {
  const { height } = useThree((state) => state.viewport)
  const [scale, setscale] = useState(1.1 * factor);
  const [positionX, setpositionX] = useState(0);
  const [positionY, setpositionY] = useState(startPosY);
  const { gl } = useThree();
  const ref = useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement)
  const size = useWindowSize();
  const [opacity, setopacity] = useState(1);


  const [scrollPosition1, delta1] = useScrollData(0)
  const [scrollPosition2, delta2] = useScrollData(1)

  useEffect(() => {
    if ((size.width ?? window.innerWidth) < 768) {
      setpositionY(THREE.MathUtils.lerp(startPosY, 1 * height, scrollPosition1 * 1.5))
      if (scrollPosition1 > 0.5) {
        setopacity(0)
      }
      else {
        setopacity(1)
      }
    }
    else {
      setpositionX(THREE.MathUtils.damp(positionX, (6 * scrollPosition1), 4, delta1))
      setpositionY(THREE.MathUtils.lerp(startPosY, 1 * height, scrollPosition2 * 1.5))
      setscale(THREE.MathUtils.damp(scale, (-0.1 * scrollPosition1 + 1.1) * factor, 4, delta1))
    }
  }, [scrollPosition1, scrollPosition2]);

  useEffect(() => {
    if (size.width && size.height) {
      if (size.width < 1024) {
        startPosY = - 0.35 * height
        setpositionY(startPosY)
      }
      else {
        startPosY = - 0.5
        setpositionY(startPosY)
      }
    }
  }, [size]);

  return (
    <Html
      transform
      position={[positionX, positionY, -4]}
      scale={[scale, scale, scale]}
      portal={ref || undefined}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict"}
    >
      {!(scrollPosition2 >= 1) &&
        <div className="bg-circle bg-gradient-to-t to-secondary from-primary pointer-events-none rounded-half max-w-xs 
                      w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72" style={{ opacity: opacity }}>
        </div>}
    </Html>
  )
}