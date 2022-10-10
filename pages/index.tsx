/**components */
import PageSection from "@/components/reuseable-components/PageSection";
import PageWrapper from "@/components/reuseable-components/PageWrapper";
import SectionTitle from "@/components/reuseable-components/SectionTitle";
import Airplane from "@/components/events-components/Airplane";
import Team111 from "@/components/events-components/member111";
import SEO from "@/components/reuseable-components/SEO";
import Card from "@/components/values-components/Card";
import FAQ from "@/components/faq-components/FAQ";
import SacHacks from "@/components/background-components/SacHacks";
import Mountain from "@/components/background-components/Mountain";
import TeamDesign from "@/components/events-components/teamDesign";
import CountDownTimer from "@/components/events-components/countdown";
import FootDesign1 from "@/components/events-components/footDesign1";
import FootDesign2 from "@/components/events-components/footDesign2";
import FootDesign3 from "@/components/events-components/footDesign3";
import FootDesign from "@/components/events-components/footDesign";
import Sm_footer from "@/components/events-components/Sm_footer";
import Md_team from "@/components/events-components/Md_team";
import Sm_design from "@/components/events-components/Sm_design";
import Count from "@/components/events-components/clock";

/**data */
import FAQItems from "@/data/faqs";
import AppTexts from "@/data/texts";
import links from "@/data/links";

/**next&react */
import type { NextPage } from "next";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

/**react-icons */

/**images */
import Bulb from "@/components/values-components/Bulb";
import Code from "@/components/values-components/Code";
import Bg1 from "@/components/background-components/Bg1";
import Bg2 from "@/components/background-components/Bg2";
import Bg2Mid from "@/components/background-components/Bg2Mid";
import TwoCats from "@/components/background-components/TwoCats";
import Bridge from "@/components/background-components/Bridge";
import BG5 from "@/components/background-components/BG5";
import MdBG5 from "@/components/background-components/mdBG5";
import BG4 from "@/components/events-components/BG4-md";
import BG4_sm from "@/components/events-components/BG4-sm";
import Sm_team from "@/components/events-components/Sm_team";
import BG5_sm from "@/components/background-components/BG5_sm";
import BG3_sm from "@/components/events-components/BG3-sm";
import Launch from "@/components/values-components/Launch";
import Tower from "@/components/background-components/Tower";

const Home: NextPage = () => {
  return (
    <React.Fragment key="index">
      {/* PAGE SEO */}
      <SEO />

      {/* PAGE UI */}
      <div className="relative text-white">
        <Bg1></Bg1>
        <PageSection
          id="index-hero"
          className="relative z-20 w-full lg:h-screen flex flex-col justify-center pb-10 sm:mt-8"
        >
          <>
            <PageWrapper className="w-full px-8 max-w-6xl mx-auto relative z-10 flex flex">
              <div className="grid lg:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center shrink-1 md:pt-24 sm:pt-4">
                  <div className="max-w-screen-lg">
                    <SacHacks />
                  </div>
                  {/* font-semibold text-2xl lg:text-3xl 2xl:text-4xl mb-1 */}
                  <h3 className="text-xl lg:text-2xl 2xl:text-3xl pt-2">
                    {AppTexts.KEYWORDS.join(". ")}
                  </h3>
                  <p className="text-base lg:text-lg 2xl:text-xl font-light pt-3">
                    Join Us Virtually On October 15-16, 2022
                  </p>
                  <div className="pt-10 pb-10">
                    <ul className="flex items-center justify-start space-x-2 md:space-x-4 lg:space-x-4 mb-8">
                      <p className="lg:text-lg">Powered by</p>
                      <img src="/assets/IBMLogo.png" alt="" />
                      <img src="/assets/gdsc.png" alt="" />
                    </ul>
                  </div>
                  <ul className="flex items-center justify-start space-x-2 md:space-x-4 lg:space-x-4 mb-8 sm:-ml-4">
                    <a
                      href={links.preRegister}
                      target="_blank"
                      rel="noreferrer"
                      className="shadow-xl bg-white text-highlight px-8 py-3 rounded-md text-center w-full lg:w-48 sm:w-28 text-xs font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                    >
                      Register Now
                    </a>
                    <a
                      href={links.sponsorUs}
                      className="shadow-xl bg-[#8E0084] text-light px-8 py-3 rounded-md text-center w-full lg:w-48 sm:w-28 text-xs font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                    >
                      Sponsor Us
                    </a>
                    <a
                      href={links.mentor}
                      target="_blank"
                      rel="noreferrer"
                      className=" lg:hidden shadow-xl bg-white text-highlight px-8 py-3 rounded-md text-center w-full lg:w-44 sm:w-32 text-xs font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                    >
                      Become a Mentor
                    </a>
                  </ul>

                  <a
                    href={links.mentor}
                    target="_blank"
                    rel="noreferrer"
                    className=" -mt-4 sm:hidden md:hidden shadow-xl bg-white text-highlight px-4 py-3 rounded-md text-center w-full lg:w-48 sm:w-32 text-xs font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm mr-20"
                  >
                    Become a Mentor
                  </a>
                </div>

                <div className="w-full z-20 flex flex-col justify-center relative ">
                  <img
                    src="/assets/tower.png"
                    alt=""
                    className="lg:hidden block z-21 relative"
                  ></img>
                  <Tower />
                </div>
              </div>
            </PageWrapper>
          </>
        </PageSection>
      </div>

      <div className="relative">
        <div className="absolute w-full px-0 lg:inline-block md:inline-block hidden">
          <Mountain></Mountain>
        </div>
        {/* <Bg2Mid /> */}
        <PageSection
          id="index-values"
          className="w-full flex flex-col justify-center relative z-10"
        >
          <PageWrapper className="w-full md:px-24 md:pb-14 max-w-6xl lg:px-24 lg:pb-14 mx-auto grid grid-cols-1 lg:mt-60 md:mt-20 md:py-12">
            <>
              <ul className="w-full h-full grid grid-cols-2 lg:grid-cols-4 relative md:pb-8 md:pt-8 px-12 md:px-0 lg:pb-8 lg:pt-8 lg:px-0 ">
                <div className="relative flex flex-row md:flex-col lg:flex-col justify-center items-center">
                  <Card.hackers />
                </div>
                <div className="relative flex flex-row md:flex-col lg:flex-col justify-center items-center ">
                  <Card.hours />
                </div>
                <div className="relative flex flex-row md:flex-col lg:flex-col justify-center items-center md:-mt-0 lg:-mt-0 sm:-mt-32">
                  <Card.projects />
                </div>
                <div className="relative flex flex-row md:flex-col lg:flex-col justify-center items-center md:-mt-0 lg:-mt-0 sm:-mt-32">
                  <Card.prizes />
                </div>
              </ul>
              <div>
                <ul className="relative z-20 w-full flex flex-row justify-center md:justify-start lg:justify-start items-center text-center md:text-left lg:text-left">
                  <div className="w-full md:w-7/12 h-full flex flex-col md:justify-start lg:justify-start md:items-start lg:items-start justify-center items-center px-8">
                    <h1 className="cardText text-white text-2xl lg:text-3xl 2xl:text-4xl font-bold">
                      A Space for Everyone
                    </h1>
                    <p className="text-white pt-2 text-lg">
                      SacHacks is the first major intercollegiate hackathon in
                      the Sacramento, California area. Our passion is to
                      cultivate the untapped potential of those in Sac by
                      providing them with the opportunity to launch their ideas
                      in a public venue. We provide the place, you bring your
                      ideas, and we have a friendly competition between all
                      creative coders to launch their ideas into action during a
                      24-hour hackathon.
                    </p>
                  </div>
                  <div className="w-5/12 flex flex-col justify-center items-center hidden md:block lg:block">
                    <TwoCats />
                  </div>
                </ul>
              </div>
              <div>
                <ul className="relative z-20 w-full flex flex-row grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center px-0 md:px-8 pb-8">
                  <div className="relative w-full text-center flex flex-col justify-center items-center transition duration-500 hover:scale-110">
                    <Bulb />
                    <h1 className="designText text-white text-3xl 2xl:text-4xl pb-2 font-semibold">
                      DESIGN
                    </h1>
                    <h4 className="text-white text-lg lg:text-xl 2xl:text-2xl font-light">
                      Create something great, unique, and innovative. Bring your
                      ideas to life
                    </h4>
                  </div>
                  <div className="relative w-full text-center flex flex-col justify-center items-center px-8 transition duration-500 hover:scale-110">
                    <Code />
                    <h1 className="designText text-white text-3xl 2xl:text-4xl pb-2 font-semibold ">
                      CODE
                    </h1>
                    <h4 className="text-white text-lg lg:text-xl 2xl:text-2xl font-light">
                      Something groundbreaking. Build your idea to make the
                      World better.
                    </h4>
                  </div>
                  <div className="relative w-full text-center flex flex-col justify-center items-center lg:px-8 transition duration-500 hover:scale-110">
                    <div className="">
                      <Launch />
                    </div>
                    <h1 className="designText text-white text-3xl 2xl:text-4xl pb-2 font-semibold">
                      LAUNCH
                    </h1>
                    <h4 className="text-white text-lg lg:text-xl 2xl:text-2xl font-light">
                      Create something great, unique, and innovative. Bring your
                      ideas to life
                    </h4>
                  </div>
                </ul>
              </div>
            </>
          </PageWrapper>
        </PageSection>
      </div>

      <PageSection
        id="index-sponsors"
        className="flex justify-center relative lg:mt-60 md:mt-24"
      >
        {/* brig svg */}
        <>
          <div className="relative sm:hidden w-full h-full">
            <Bridge />
          </div>
          <div className="relative sm:flex hidden">
            <BG3_sm />
          </div>

          <PageWrapper className="w-full pb-10 ml-20 max-w-6xl mx-auto grid grid-cols-1 absolute content-center">
            <div className="absolute content-center">
              <div className="w-full mt-24 ml-[0] pb-10">
                <SectionTitle title="Our Sponsors" color="light" />
              </div>
              <div className="lg:mt-20 md:mt-20 mt-5 mr-20">
                <ul className="relative z-20 w-full flex flex-row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center">
                  <div className="relative w-full flex flex-col justify-center items-center sm:px-4 md:px-4 lg:px-4 py-4">
                    <img
                      src="/assets/GDSC Logo chapter lockup centered.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative w-full flex flex-col justify-center items-center sm:px-4 md:px-4 lg:px-4 py-4">
                    <img src="/assets/mlh-logo-white.png" alt="" />
                  </div>
                  <div className="relative w-full flex flex-col justify-center items-center sm:px-4 md:px-4 lg:px-4 py-4">
                    <img src="/assets/ibmR.png" alt="" />
                  </div>
                  <div className="relative w-full flex flex-col justify-center items-center sm:px-4 md:px-4 lg:px-4 py-4">
                    <img src="/assets/echo3D - Logo 2021.png" alt="" />
                  </div>
                  <div className="relative w-full flex flex-col justify-center items-center sm:px-4 md:px-4 lg:px-4 mb-2">
                    <img src="/assets/4.png" alt="" />
                  </div>
                </ul>
              </div>
            </div>
          </PageWrapper>
        </>
      </PageSection>

      <PageSection
        id="index-team"
        className="w-full flex justify-center relative"
      >
        {/* brig svg */}
        <>
          <div className="lg:relative md:hidden sm:hidden w-full">
            <Mountain />
          </div>
          <div className="relative md:flex hidden">
            <BG4 />
          </div>

          <div className=" relative sm:flex hidden  ">
            <BG4_sm />
          </div>

          <PageWrapper className="w-full mt-20 pt-20 pb-28 ml-20 max-w-6xl mx-auto grid grid-cols-1 absolute content-center">
            <>
              <div className="absolute ">
                <div className="ml-[0] pb-10 mb-10 md:ml-12">
                  <SectionTitle title="The Team" color="light" />
                </div>
                <div className="lg:block md:block hidden">
                  <div className="flex flex-row justify-between justify-center mr-48 mb-14  md:ml-14 md:w-[800px] md:h-[1100px] lg:w-[1400px] md:-mt-8">
                    <Md_team />
                  </div>

                  {/* <div className="flex flex-row justify-between justify-center mr-32 mb-14">
                    <Team112 />
                  </div>

                  <div className="flex flex-row justify-between justify-center mr-32 mb-14 ">
                    <Team9 />
                  </div>

                  <div className="flex flex-row justify-between justify-center mr-32 mb-14 ">
                    <Team4 /> */}
                  {/* </div> */}
                  {/* <div className="  inline">
                    <div className="pr-28 inline">
                      <Team1 />
                    </div>{" "}
                    <div className=" inline">
                      {" "}
                      <Team2 />
                    </div>
                    <div className="pl-60 -translate-y-80 mt-10">
                      <TeamDesign />
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <div className="md:flex flex-start hidden  ml-12">
                <Md_team />
              </div> */}

              <div className="sm:flex flex-start hidden mr-20">
                <Sm_team />
              </div>
              <div className="sm:flex flex-end hidden translate-x-16 -translate-y-72">
                <Sm_design />
              </div>
            </>
          </PageWrapper>
        </>
      </PageSection>

      <PageSection
        id="index-FAQ"
        className="min-h-screen w-full  flex justify-center relative"
      >
        <>
          <div className="md:relative lg:hidden sm:hidden">
            <MdBG5 />
          </div>
          <div className="lg:relative md:hidden sm:hidden w-full h-full">
            <BG5 />
          </div>
          <div className="sm:flex relative hidden">
            <BG5_sm />
          </div>

          <PageWrapper className="w-3/4 mt-20 ml-36 mr-48  backdrop-blur-sm   absolute">
            <>
              <SectionTitle title="FAQ" color="light" />
              <ul className="w-full grid grid-cols-1  gap-8 mt-16  ">
                {FAQItems.map((faq, index) => (
                  <FAQ {...faq} key={index} />
                ))}
              </ul>
              <div
                id="index-register"
                className="lg:mt-40 md:mt-36 sm:mt-32 mt-20"
              >
                <SectionTitle title="Hackathon Countdown" color="light" />
                <div className="text-white  mb-20">
                  {/* <CountDownTimer days={21} hours={0} minutes={0} seconds={0} /> */}
                  <Count />
                </div>
                <div className="">
                  <a
                    href={links.preRegister}
                    target="_blank"
                    rel="noreferrer"
                    className="shadow-xl bg-[#8E0084] text-white px-8 py-3 rounded-half text-center w-full sm:w-56 text-sm font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="lg:flex flex-row w-3/4 hidden ">
                <div className="translate-y-16">
                  <FootDesign1 />
                </div>

                <div className="-translate-y-10 ml-[8%]">
                  <FootDesign2 />
                </div>
                <div className="-translate-y-40 ml-[8%]">
                  <FootDesign3 />
                </div>
              </div>

              <div className="md:flex flex-row w-3/4 -translate-y-48 ml-20 hidden">
                <FootDesign />
              </div>
              <div className="sm:flex flex-row w-3/4 -translate-y-[12%] translate-x-[25%] hidden">
                <Sm_footer />
              </div>
            </>
          </PageWrapper>
        </>
      </PageSection>
    </React.Fragment>
  );
};
export default Home;
