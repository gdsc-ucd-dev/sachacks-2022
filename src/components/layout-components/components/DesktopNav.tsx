/**data */
import routes from "@/data/routes";
import { useState, useEffect } from "react";
// import Menu from "./Menu";
import ReactDOM from "react-dom";
import pkg from "semantic-ui-react/package.json";
import MobileNav from "./MobileNav";

const DesktopNav: React.FC = () => {
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
    <nav className="hidden lg:flex items-center justify-center text-white">
      <ul className="flex items-center space-x-8 xl:space-x-16 pl-8">
        <MobileNav scroll={scroll} />
        {routes.map((route, index) => (
          <a
            key={index}
            href={route.href}
            className="transition-all hover:opacity-50 capitalize"
          >
            {route.displayAs}
          </a>
        ))}

        {/* <Menu /> */}
      </ul>
    </nav>
  );
};
export default DesktopNav;
