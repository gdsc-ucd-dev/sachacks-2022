import React from "react";
import HeadTitle from "../reuseable-components/HeadTitle";
import DesktopNav from "./components/DesktopNav";
import MLHPopUp from "./components/MLHPopUp";
import MobileNav from "./components/MobileNav";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <MLHPopUp />
      <header className="w-full fixed top-0 z-40 bg-sky-200">
        <section className="p-4 lg:px-8 max-w-7xl mx-auto flex justify-between lg:justify-start lg:space-x-8 items-center">
          <HeadTitle mountedIn="header" />
          <MobileNav />
          <DesktopNav />
        </section>
      </header>
    </React.Fragment>
  );
};

export default Header;
