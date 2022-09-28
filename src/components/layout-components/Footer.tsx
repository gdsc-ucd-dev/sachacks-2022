/**components */
import HeadTitle from "../reuseable-components/HeadTitle";

/**react-icons */
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaHeart, FaDiscord } from "react-icons/fa";

/**next&react */
import React from "react";

import links from "@/data/links";
const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <footer className="w-full bg-fuchsia-900 relative z-10 bottom-0  fixed">
        <section className="relative z-0 px-8 max-w-7xl mx-auto py-8 grid grid-cols-1 grid-cols-6 gap-0 place-items-start text-light sm:ml-24  md:ml-[30%] fixed">
          <div className="w-full flex flex-col items-center items-start col-span-2 ">
            <div className="lg:-ml-16 md:ml-20 sm:ml-20">
              <HeadTitle mountedIn="footer" />
            </div>
            <div className="w-full items-center items-start col-span-4 relative text-light">
              <ul className="flex justify-start space-x-4  mt-10 ml-24 sm:mt-4 sm:ml-4 md:ml-[40%]">
                <li>
                  <div className="row">
                    <a
                      href="https://www.facebook.com/sachacks/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFacebook />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <a
                      href="https://www.instagram.com/sachacks/"
                      target="_blank"
                      rel="noreferrer"
                      data-link="instagram"
                    >
                      <BsInstagram />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <a
                      href="https://twitter.com/sachacks?lang=en"
                      target="_blank"
                      rel="noreferrer"
                      data-link="twitter"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <a
                      href="https://discord.com/invite/cWjFh4XxyZ"
                      target="_blank"
                      rel="noreferrer"
                      data-link="discord"
                    >
                      <FaDiscord />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="capitalize col-span-2 relative">
            <ul className="text-sm flex flex-col space-y-1 items-start text-light ml-20 sm:hidden md:hidden">
              <li>
                <a href="#index-hero">Home</a>
              </li>
              <li>
                <a href="#index-values">Our Values</a>
              </li>
              <li>
                <a href="#index-events">Featured Events</a>
              </li>
              <li>
                <a href="#index-FAQ">FAQ</a>
              </li>
              <li>
                <a href="#index-sponsors">Sponsors</a>
              </li>
            </ul>
          </div>
          <div className="capitalize col-span-2 flex flex-col relative text-light  text-sm sm:hidden md:hidden">
            <a href={links.sponsorUs} className="mb-2 sm:hidden md:hidden">
              Sponsor Us
            </a>
            {/* <ul className="text-sm pl-4 flex flex-col items-start space-y-1 mb-3 border-l-2 border-highlight relative"> */}
            {/* <li>
                <a href="">Mentors</a>
              </li> */}
            {/* <li>
                <a href={links.preRegister} target="_blank" rel="noreferrer">
                  Hackers
                </a>
              </li>
              <li>
                <a href={links.sponsorUs}>Sponsor Us</a>
              </li>
            </ul> */}
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
              rel="noreferrer"
            >
              MLH CODE OF CONDUCT
            </a>
            {/* <div className="md:mt-[27%] lg:mt-[22%] flex flex-row md:text-xs">
              Made with &nbsp; <FaHeart /> &nbsp; by SacHacks 2022
            </div> */}
            <div className=" lg:mt-[22%] flex flex-row ">
              Made with &nbsp; <FaHeart /> &nbsp; by SacHacks 2022
            </div>
          </div>
        </section>
        <div className=" sm:flex md:flex flex-row text-xs hidden text-light ml-28 md:ml-[38%] sm:ml-[30%]">
          Made with &nbsp; <FaHeart /> &nbsp; by SacHacks 2022
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
