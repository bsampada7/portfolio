import React, { useEffect, useRef, useState } from "react";

const textStrip = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const stripCount = 10, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();

for (var i = 0; i < stripCount; i++) {
  stripX[i] = Math.floor(Math.random() * 1265);
  stripY[i] = -100;
  dY[i] = Math.floor(Math.random() * 7) + 3;
  stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
}

// const theColors = ['#cefbe4', '#81ec72', '#5cd646', '#54d13c', '#4ccc32', '#43c728'];
const theColors = ['#fbd0fb', '#b874ec', '#9447d7', '#8a3dd1', '#8232cd', '#7b28c8'];

const Matrix = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [intersect, setintersect] = useState(false);


  function drawStrip(x: number, y: number) {
    if (!context) return;
    for (var k = 0; k <= 20; k++) {
      var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
      if (context.fillText) {
        switch (k) {
          case 0:
            context.fillStyle = theColors[0]; break;
          case 1:
            context.fillStyle = theColors[1]; break;
          case 3:
            context.fillStyle = theColors[2]; break;
          case 7:
            context.fillStyle = theColors[3]; break;
          case 13:
            context.fillStyle = theColors[4]; break;
          case 17:
            context.fillStyle = theColors[5]; break;
        }
        context.fillText(randChar, x, y);
      }
      y -= stripFontSize[k];
    }
  }

  function draw() {
    if (!context || !canvasRef.current || !intersect) return;
    // clear the canvas and set the properties
    const t1 = Date.now()
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    context.shadowOffsetX = context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = '#7b28c8';

    for (var j = 0; j < stripCount; j++) {
      context.font = stripFontSize[j] + 'px MatrixCode';
      context.textBaseline = 'top';
      context.textAlign = 'center';

      if (stripY[j] > 1358) {
        stripX[j] = Math.floor(Math.random() * canvasRef.current.width);
        stripY[j] = -100;
        dY[j] = Math.floor(Math.random() * 7) + 3;
        stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
        drawStrip(stripX[j], stripY[j]);
      } else drawStrip(stripX[j], stripY[j]);

      stripY[j] += dY[j];
    }
    // const interval = (Date.now() - t1);
    // if (interval > 200)
    //   window.requestAnimationFrame(draw);
    // else
    setTimeout(() => {
      window.requestAnimationFrame(draw);
    }, 100);
  }

  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setintersect(entry.isIntersecting);
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, options);
    if (canvasRef.current) {
      observer.observe(canvasRef.current)
      const contextTemp = canvasRef.current?.getContext('2d') as CanvasRenderingContext2D;
      if (contextTemp)
        contextTemp.globalCompositeOperation = 'lighter';
      setContext(contextTemp)
      draw();
    }

    return () => {
      if (canvasRef.current)
        observer.unobserve(canvasRef.current)
    }

  }, [canvasRef.current]);

  useEffect(() => {
    if (intersect) {
      draw();
    }
  }, [intersect]);

  return (
    <div>
      <canvas width={200} height={150} className="absolute w-6/12 h-7/12 top-[40%] left-0 filter blur-sm h-full" ref={canvasRef}>

      </canvas>

    </div>);
};

export default Matrix;
