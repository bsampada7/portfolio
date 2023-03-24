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
      setactiveLink(Math.trunc(window.scrolldrei.el.scrollTop * numberofPages / window.scrolldrei.el.scrollHeight))
    }
  }, [menuOpen]);

  const scrollFunc = (page: number) => {
    closeMenu()
    setTimeout(() => {
      window.scrolldrei.el.scrollTo({ top: page * window.scrolldrei.el.scrollHeight / numberofPages })
    }, 500);
  }

  return (
    <div className={`menu-drawer pl-4 fixed w-96 h-full top-0 ${menuOpen ? 'right-0' : '-right-96'} bg-background1 
                      flex text-primary font-semibold`}>
      <button
        className="fixed pointer-events-auto cursor-pointer w-10 h-10 p-2 m-8 right-0 top-0 rounded-lg bg-primary"
        onClick={closeMenu}
      >
        <img src="icons/hamburger.svg" alt="menu"></img>
      </button>
      <div className="ml-24 flex flex-col  justify-center text-3xl gap-5">
        <button className={`ml-6 w-fit ${activeLink === 0 ? "active" : ""}`} onClick={() => scrollFunc(0)}>Home</button>
        <button className={`ml-6 w-fit ${activeLink === 1 ? "active" : ""}`} onClick={() => scrollFunc(1)}>About</button>
        <button className={`ml-6 w-fit ${activeLink === 2 ? "active" : ""}`} onClick={() => scrollFunc(2)}>Education</button>
        <button className={`ml-6 w-fit ${activeLink === 3 ? "active" : ""}`} onClick={() => scrollFunc(3)}>Experience</button>
        <button className={`ml-6 w-fit ${activeLink === 4 ? "active" : ""}`} onClick={() => scrollFunc(4)}>Projects</button>
        <button className={`ml-6 w-fit ${activeLink === 5 ? "active" : ""}`} onClick={() => scrollFunc(5)}>Contact</button>
      </div>
    </div>
  );
};

export default MenuContainer;
