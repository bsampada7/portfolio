import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";

const Projects = () => {
  const [activeCard, setactiveCard] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && wrapperRef.current) {
      const width = containerRef.current.clientWidth
      const windowWidth = wrapperRef.current.clientWidth
      const translate = (windowWidth / 2) - ((width / 5) * (activeCard + 1)) + ((width / 5) / 2) - 32
      containerRef.current.style.transform = `translateX(${translate}px)`
    };

  }, [activeCard]);

  const onButtonClick = (direction: string) => {
    if (direction === 'right') {
      if (activeCard === 4) return
      setactiveCard(activeCard => activeCard + 1)
    }
    else {
      if (activeCard === 0) return
      setactiveCard(activeCard => activeCard - 1)
    }
  }


  return (
    <div className="flex flex-col w-full h-full gap-4 pb-10 pt-10 max-w-[90rem] mx-auto relative" ref={wrapperRef}>
      <div className="text-3xl font-bold mx-auto my-10 text-primary">
        <span>Projects</span>
      </div>
      <div className="w-full flex-grow flex overflow-auto px-8 pointer-events-none" >
        <div className="flex gap-8 flex-grow items-center justify-center transition-transform-hor" ref={containerRef}>
          <Card
            name={"Beyond Dreams"}
            imgclass={"bg-[url('/images/beyonddreams.png')]"}
            badges={[
              { text: 'React.js' },
              { text: 'HTML' },
              { text: 'CSS' },
            ]}
            description={"An interactive magazine prototype as a form of company newsletter"}
            livelink={"https://beyonddreams.explorug.com/1/"}
            className={`${activeCard === 0 && 'scale-110'}`}
          />

          <Card
            name={"Multi function Room"}
            imgclass={"bg-[url('/images/multiroom.png')]"}
            badges={[
              { text: 'React.js' },
              { text: 'Three.js' },
              { text: 'Blueprint.js' },
            ]}
            description={"A fully customizable room for a virutal visualization of rugs in a room"}
            livelink={"https://beyonddreams.explorug.com/2/?page=13"}
            className={`${activeCard === 1 && 'scale-110'}`}

          />

          <Card
            name={"My Portfolio website"}
            imgclass={"bg-[url('/images/portfolio.png')]"}
            badges={[
              { text: 'Next.js' },
              { text: 'Typescript' },
              { text: 'Blender' },
            ]}
            description={"My portfolio site showcasing my skills and projects"}
            github={"https://github.com/sampada04/portfolio"}
            livelink={"https://virtualrugstudio.com/"}
            className={`${activeCard === 2 && 'scale-110'}`}

          />

          <Card
            name={"One Barrister"}
            imgclass={"bg-[url('/images/onebarrister.png')]"}
            badges={[
              { text: 'React.js' },
              { text: 'Next.js' },
              { text: 'Php' },
            ]}
            description={"Client Work for a website"}
            livelink={"https://onebarrister.co.uk/"}
            className={`${activeCard === 3 && 'scale-110'}`}

          />

          <Card
            name={"Virtual Rug Studio"}
            imgclass={"bg-[url('/images/vrs.png')]"}
            badges={[
              { text: 'React.js' },
              { text: 'Three.js' },
            ]}
            description={"A Virtual studio to capture rugs in multiple light and room settings"}
            livelink={"https://virtualrugstudio.com/"}
            className={`${activeCard === 4 && 'scale-110'}`}

          />


        </div>
      </div>
      <div className="flex justify-center gap-8">
        <button className="w-12 h-12 rounded-2xl p-2 pl-1.5 bg-primary hover:bg-primary-dark" onClick={() => onButtonClick('left')}>
          <img src="icons/left.svg"></img>
        </button>
        <button className="w-12 h-12 rounded-2xl p-2 pr-1.5 bg-primary hover:bg-primary-dark" onClick={() => onButtonClick('right')}>
          <img src="icons/right.svg"></img>
        </button>
      </div>

    </div >
  );
};

export default Projects;
