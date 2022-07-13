/**data */
import routes from "@/data/routes";

/**utility functions */
import join from "@/utils/join";

/**next&react */
import React, { useState } from "react";

const MobileNav: React.FC = () => {
  const [mobileMenuView, setMobileMenuView] = useState<boolean>(false);
  const onClickMobileViewToggle = () => {
    setMobileMenuView((current) => !current);
  };
  return (
    <React.Fragment>
      <nav className="flex flex-col lg:hidden ">
        <button onClick={onClickMobileViewToggle} className="flex flex-col">
          <span
            className={join(
              "transition-all w-8 h-1 rounded-full border",
              mobileMenuView
                ? "bg-highlight/0 border-highlight/100"
                : "bg-highlight/100 border-highlight/0"
            )}
          />
          <span
            className={join(
              "h-1 mx-auto rounded-full my-1.5 transition-all border",
              mobileMenuView
                ? "w-4 bg-highlight/0 border-highlight/100"
                : "w-8  bg-highlight border-highlight/0"
            )}
          />
          <span
            className={join(
              "transition-all w-8 h-1 rounded-full border",
              mobileMenuView
                ? "bg-highlight/0 border-highlight/100"
                : "bg-highlight/100 border-highlight/0"
            )}
          />
        </button>
      </nav>
      <nav
        className={join(
          "transition-all bg-highlight/100 transform fixed top-16 z-0 right-0 w-max ease-in block lg:hidden",
          mobileMenuView ? " translate-x-0 " : "bg-highlight/0 translate-x-full"
        )}
      >
        <section className="p-4">
          <ul className="flex flex-col space-y-4">
            {routes.map((route, index) => (
              <a key={index} href={route.href} className="text-light">
                {route.displayAs}
              </a>
            ))}
          </ul>
        </section>
      </nav>
    </React.Fragment>
  );
};
export default MobileNav;
