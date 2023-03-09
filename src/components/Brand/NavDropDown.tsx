import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import Link from "next/link";


const NavDropDown = () => {

  {/* <div className="flex gap-2">
        <Link href={"/"}>Home</Link>
        <Link href={"#Education"}>Education</Link>
        <Link href={"#Experience"}>Experience</Link>
        <Link href={"#Projects"}>Projects</Link>
        <Link href={"#Contact"}>Contact</Link>
      </div> */}
  return (
    <Menu>
      <Menu.Button><img src="icons/hamburger.svg" alt="menu"></img></Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-8 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                                flex flex-col
        ">
          <Menu.Item>
            {({ active }) => (
              <Link href={"/"} className={`${active && 'active'}`}>Home</Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href={"#Education"} className={`${active && 'active'}`}>Education</Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href={"#Experience"} className={`${active && 'active'}`}>Experience</Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href={"#Projects"} className={`${active && 'active'}`}>Projects</Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href={"#Contact"} className={`${active && 'active'}`}>Contact</Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
};

export default NavDropDown;

