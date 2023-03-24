import { useEffect } from "react";

const Brand = () => {

  useEffect(() => {
    const spans = document.querySelectorAll('#brand span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e: any) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e: any) => {
        e.target.classList.remove('active');
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1))
    });
  }, []);

  return (
    // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    <div className="flex justify-between fixed top-0  z-50
                     m-8 brand-wrapper">
      <div>
        <div id="brand" className="text-primary pointer-events-auto">
          <span>S</span>
          <span>A</span>
          <span>M</span>
          <span>P</span>
          <span>A</span>
          <span>D</span>
          <span>A</span>
          <span className="font-bold text-5xl ml-1 w-2 h-2 rounded-lg"></span>
        </div>
      </div>
    </div>);
};

export default Brand;



