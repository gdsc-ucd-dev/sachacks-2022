/**data */
import routes from "@/data/routes";
import events from "@/data/routes/past_eventts";

/**utility functions */
import join from "@/utils/join";

/**next&react */
import React, { useState } from "react";
import past_eventts from "@/data/routes/past_eventts";
interface MLHPopUpProps {
  scroll: boolean;
}
const MobileNav: React.FC<MLHPopUpProps> = ({ scroll }) => {
  const [mobileMenuView, setMobileMenuView] = useState<boolean>(false);
  const onClickMobileViewToggle = () => {
    setMobileMenuView((current) => !current);
  };

  return (
    <React.Fragment>
      <nav className="flex flex-col ">
        <button
          onClick={onClickMobileViewToggle}
          className="flex flex-col"
          onScroll={onClickMobileViewToggle}
        >
          PAST EVENTS
        </button>
      </nav>
      <nav
        className={join(
          "transition-all bg-[#8E0084]/100  fixed top-16 z-0  -translate-x-10 xl:-translate-x-20 w-max ease-in block",
          mobileMenuView
            ? "  translate-x-[5%] "
            : "hidden bg--[#8E0084]/0 -translate-y-full"
        )}
      >
        <section className="p-4" onScroll={onClickMobileViewToggle}>
          <ul className="flex flex-col space-y-4">
            {events.map((events, index) => (
              <a
                key={index}
                href={events.href}
                target="_blank"
                className="text-light text-sm"
                rel="noreferrer"
              >
                {events.displayAs}
              </a>
            ))}
          </ul>
        </section>
      </nav>
    </React.Fragment>
  );
};
export default MobileNav;
