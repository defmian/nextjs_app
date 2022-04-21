import React, { useState } from "react";
// import Link from 'next/ll'
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Container from "./Container";

export default function Nav({ colorLogo }) {
  const [isOpen, toggleSidebar] = useState(false);

  return (
    <nav className="relative select-none items-center justify-between px-2 py-3 bg-accent-1">
      <Container>
        <div className="relative flex flex-col lg:flex-row justify-between">
          <div className="w-full flex flex-row justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <div className="mt-4">
              <Logo colorLogo={colorLogo} />
            </div>
            <button
              type="button"
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => toggleSidebar(!isOpen)}
            >
              <svg fill="white" viewBox="0 0 100 80" width="30" height="30">
                <rect width="80" height="10"></rect>
                <rect y="30" width="80" height="10"></rect>
                <rect y="60" width="80" height="10"></rect>
              </svg>
            </button>
          </div>

          
          <div
            className={"lg:flex flex-grow " + (isOpen ? " flex" : " hidden")}
            id="navbar-danger"
          >
            <NavMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
}
