/**next&react */
import useScroll from "@/utils/scroll";
import React, { useEffect, useState } from "react";

/**components */
import HeadTitle from "../reuseable-components/HeadTitle";
import DesktopNav from "./components/DesktopNav";
import MLHPopUp from "./components/MLHPopUp";
import MobileNav from "./components/MobileNav";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop || document.documentElement.scrollTop > 150) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <MLHPopUp scroll={scroll} />
      <header className="w-full sticky top-0 z-40 bg-transparent">
        <section className="p-4 pt-8 lg:px-8 max-w-7xl mx-auto flex justify-between lg:justify-start lg:space-x-8 items-center">
          <HeadTitle mountedIn="header" />
          <MobileNav />
          <DesktopNav />
        </section>
      </header>
    </React.Fragment>
  );
};

export default Header;
