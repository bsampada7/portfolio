import { MyStoreContext } from "@/store/mystore";
import { useContext } from "react";
import { Link } from 'react-scroll';

const MenuContainer = () => {
  const { state } = useContext(MyStoreContext);
  const { menuOpen } = state;


  return (
    <div className={`menu-drawer fixed w-96 h-full top-0 ${menuOpen ? 'right-0' : '-right-96'} bg-white 
                      flex text-primary font-semibold`}>


      <div className="ml-24 flex flex-col  justify-center text-3xl gap-5">
        <Link activeClass="active ml-6" to="Home" spy={true} smooth={true} duration={500} className="cursor-pointer">
          Home
        </Link>
        <Link activeClass="active ml-6" to="Education" spy={true} smooth={true} duration={500} className="cursor-pointer">
          Education
        </Link>
        <Link activeClass="active ml-6" to="Experience" spy={true} smooth={true} duration={500} className="cursor-pointer">
          Experience
        </Link>
        <Link activeClass="active ml-6" to="Projects" spy={true} smooth={true} duration={500} className="cursor-pointer">
          Projects
        </Link>
        <Link activeClass="active ml-6" to="Contact" spy={true} smooth={true} duration={500} className="cursor-pointer">
          Contact
        </Link>
        {/* <Link href={"/"} className={`${router.asPath === '/' && 'active ml-6'}`}>Home</Link>
        <Link href={"#Education"} className={`${router.asPath === '/#Education' && 'active ml-6'}`}>Education</Link>
        <Link href={"#Experience"} className={`${router.asPath === '/#Experience' && 'active ml-6'}`}>Experience</Link>
        <Link href={"#Projects"} className={`${router.asPath === '/#Projects' && 'active ml-6'}`}>Projects</Link>
        <Link href={"#Contact"} className={`${router.asPath === '/#Contact' && 'active ml-6'}`}>Contact</Link> */}
      </div>
    </div>
  );
};

export default MenuContainer;
