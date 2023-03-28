import { socialLinks } from "@/constants";
import { MyStoreContext } from "@/store/mystore";
import { numberofPages } from "@/utils/hooks/useScrollData";
import { useContext, useEffect, useState } from "react";

const MenuContainer = () => {
  const { state, dispatch } = useContext(MyStoreContext);
  const { menuOpen } = state;
  const [activeLink, setactiveLink] = useState(0);

  const closeMenu = () => {
    dispatch({
      type: 'Post',
      payload: { menuOpen: false }
    })
  }

  useEffect(() => {
    if (menuOpen) {
      setactiveLink(Math.min(Math.trunc(1.1 * window.scrolldrei.el.scrollTop * numberofPages / window.scrolldrei.el.scrollHeight), numberofPages - 1))
    }
  }, [menuOpen]);

  const scrollFunc = (page: number) => {
    closeMenu()
    setTimeout(() => {
      window.scrolldrei.el.scrollTo({ top: page * window.scrolldrei.el.scrollHeight / numberofPages })
    }, 500);
  }

  return (
    <div className={`menu-drawer pl-4 fixed w-full xs:w-96 h-full top-0 ${menuOpen ? 'right-0' : '-right-[100%] xs:-right-96'} bg-background1 
                    text-primary font-semibold flex flex-col items-center justify-center`}>
      {/* <button
        className={`absolute pointer-events-auto cursor-pointer w-10 h-10 p-2 m-8 right-0 top-0 ${menuOpen ? 'inline-block' : 'hidden'} rounded-lg bg-primary`}
        onClick={closeMenu}
      >
        <img src="icons/close.svg" alt="menu"></img>
      </button> */}
      <div className="relative flex flex-col  justify-center text-3xl gap-5">
        <button className={`relative ml-6 w-fit ${activeLink === 0 ? "active" : ""}`} onClick={() => scrollFunc(0)}>Home</button>
        <button className={`relative ml-6 w-fit ${activeLink === 1 ? "active" : ""}`} onClick={() => scrollFunc(1)}>About</button>
        <button className={`relative ml-6 w-fit ${activeLink === 2 ? "active" : ""}`} onClick={() => scrollFunc(2)}>Education</button>
        <button className={`relative ml-6 w-fit ${activeLink === 3 ? "active" : ""}`} onClick={() => scrollFunc(3)}>Experience</button>
        <button className={`relative ml-6 w-fit ${activeLink === 4 ? "active" : ""}`} onClick={() => scrollFunc(4)}>Projects</button>
        <button className={`relative ml-6 w-fit ${activeLink === 5 ? "active" : ""}`} onClick={() => scrollFunc(5)}>Contact</button>
      </div>
      <div className="absolute bottom-0 mb-4">
        <div className="flex gap-4 items-center justify-center mt-20">
          {socialLinks.map(({ name, link, image, className }) =>
            <a key={name} target="_blank" href={link} className="p-0.5" rel="noopener noreferrer">
              <img src={image} alt={name} className={`w-8 h-8 ${className || ''}`} ></img>
            </a>
          )
          }
        </div>
        <hr className="text-text-muted opacity-20 w-[120%] -ml-[10%] mx-auto my-4" />
      </div>

    </div>
  );
};

export default MenuContainer;
