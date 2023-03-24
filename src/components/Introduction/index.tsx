import useScrollData from "@/utils/hooks/useScrollData";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Background from "../Background";
import PrimaryButton from "../PrimaryButton";

function Introduction() {
  const { gl } = useThree();
  const introduction = useRef<any>(null)
  const [scrollPosition, _] = useScrollData(0.5)
  const ref = useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement)

  useEffect(() => {
    if (introduction.current) {
      introduction.current.classList.toggle('show', !scrollPosition)
    }
  }, [scrollPosition]);
  //normal x 0 z -7.9
  //4k 

  return (
    <Html
      transform
      position={[0, -0.6, -7.9]}
      // scale={1}
      portal={ref || undefined}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict"}
    >
      <div className="introduction show w-[100vw] h-[100vh] max-w-[78rem] relative" ref={introduction}>
        <Background />
        <div className="pointer-events-none">
          <div className="greeting absolute top-20 left-10 w-1/3">
            <div className="text-9xl font-bold montserrat text-text-muted">
              <span>H</span>
              <span>I</span>
              <span className="animation-flicker overflow-hidden width-full z-10 left-[27%] text-left">!</span>
            </div>
            <div className="text-5xl mt-4 montserrat">I am <span className="block">Sampada Bhujel</span></div>
            <div className="text-3xl mt-4">A full stack developer with <br /> over <strong className="text-secondary">3 years</strong> experience</div>
            <Link href={"#Contact"} className="pointer-events-auto">
              <PrimaryButton text={"Get in touch"} className={"mt-12 ml-0 pointer-events-auto pointer-events-strict cursor-pointer"} />
            </Link>
          </div>
        </div>
      </div>
    </Html>
  )
}

export default Introduction;
