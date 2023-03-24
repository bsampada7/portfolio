import useScrollData, { numberofPages } from "@/utils/hooks/useScrollData";
import useWindowSize from "@/utils/hooks/useWindowResize";
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
  const size = useWindowSize();

  useEffect(() => {
    if (introduction.current) {
      introduction.current.classList.toggle('show', !scrollPosition)
    }
  }, [scrollPosition]);

  const setSize = () => {
    let width = size.width ?? window.innerWidth
    let height = size.height ?? window.innerHeight
    if (introduction.current) {
      introduction.current.style.width = `${width / 1.21}px`
      introduction.current.style.height = `${height / 1.21}px`
    }
  }

  useEffect(() => {
    setSize();
  }, [size]);

  useEffect(() => {
    setTimeout(() => {
      setSize();
    }, 500);
  }, []);

  const onContact = () => {
    window.scrolldrei.el.scrollTo({ top: (numberofPages - 1) * window.scrolldrei.el.scrollHeight / numberofPages })
  }


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
      <div className="introduction show w-[100vw] h-[100vh] max-w-[65rem] max-h-[40rem] relative" ref={introduction}>
        <Background />
        <div className="pointer-events-none">
          <div className="greeting absolute flex flex-col top-10 lg:top-20  max-h-[40rem] text-left pl-8 xs:pl-20 pr-4 lg:pl-0 lg:-left-10 w-full lg:w-1/3">
            <div className="text-7xl md:text-8xl xl:text-9xl font-bold montserrat text-text-muted">
              <span>H</span>
              <span>I</span>
              <span className="animation-flicker overflow-hidden width-full z-10 left-[27%] text-left">!</span>
            </div>
            <div className="text-xl md:text-3xl lg:text-4xl xl:text-4xl montserrat">I am <span className="block">Sampada Bhujel</span></div>
            <div className="text-base md:text-xl lg:text-2xl xl:text-3xl">A full stack developer with over <br className="hidden lg:block" />  <strong className="text-secondary">3 years</strong> experience</div>

            <PrimaryButton text={"Get in touch"} className={"mt-4 ml-0 pointer-events-auto pointer-events-strict cursor-pointer"} onClick={onContact} />

          </div>
        </div>
      </div>
    </Html>
  )
}

export default Introduction;
