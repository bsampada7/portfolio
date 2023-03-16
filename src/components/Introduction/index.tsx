import useScrollData from "@/utils/hooks/useScrollData";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Link from "next/link";
import { useEffect, useRef } from "react";
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

  return (
    <Html
      transform
      position={[0, -0.6, -7.9]}
      portal={ref || undefined}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict"}
    >
      <div className="introduction show w-[100vw] h-[100vh] relative" ref={introduction}>
        <div className="pointer-events-none">
          <div className="greeting text-primary absolute top-20 left-10 ">
            <div className="text-9xl font-bold ">
              <span>H</span>
              <span>I</span>
              <span className="flicker">!</span>
            </div>
            <div className="text-5xl mt-4">I am Sampada Bhujel</div>
            <div className="text-3xl mt-4">A full stack developer with over<br /> <strong className="text-secondary">3 years</strong> experience</div>
          </div>
          <div className="absolute left-10 top-96 z-10">
            <Link href={"#Contact"} className="pointer-events-auto">
              <PrimaryButton text={"Get in touch"} className={"mt-8 ml-0 pointer-events-auto pointer-events-strict cursor-pointer"} />
            </Link>
          </div>
        </div>
      </div>
    </Html>
  )
}

export default Introduction;
