import { MyStoreContext } from "@/store/mystore";
import React, { useContext } from "react";
import Brand from "../Brand";

const Overlay = () => {
  const { state, dispatch } = useContext(MyStoreContext);

  const handleMenuToggle = () => {
    dispatch({
      type: 'Post',
      payload: { menuOpen: !state.menuOpen }
    })
  }

  return (
    <div className="absolute w-full h-full left-0 top-0 pointer-events-none">
      <Brand />
      <button
        className="fixed pointer-events-auto cursor-pointer w-10 h-10 p-2 bg-primary hover:bg-primary-dark m-8 right-0 top-0 rounded-lg"
        onClick={handleMenuToggle}
      >
        <img src="icons/hamburger.svg" alt="menu"></img>
      </button>

    </div>
  );
};

export default Overlay;
