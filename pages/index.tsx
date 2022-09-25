/**components */
import PageSection from "@/components/reuseable-components/PageSection";
import PageWrapper from "@/components/reuseable-components/PageWrapper";
import SectionTitle from "@/components/reuseable-components/SectionTitle";
import Airplane from "@/components/events-components/Airplane";
import Team1 from "@/components/events-components/member";
import Team111 from "@/components/events-components/member111";
import Team112 from "@/components/events-components/member112";
import Team13 from "@/components/events-components/member13";
// import Team5 from "@/components/events-components/member5";
// import Team6 from "@/components/events-components/member6";
// import Team7 from "@/components/events-components/member7";
// import Team8 from "@/components/events-components/member8";
import Team9 from "@/components/events-components/member9";
import Team2 from "@/components/events-components/member1";
import Team4 from "@/components/events-components/member4";
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
import Md_member from "@/components/events-components/md_member";
import Sm_footer from "@/components/events-components/Sm_footer";

/**data */
import FAQItems from "@/data/faqs";
import AppTexts from "@/data/texts";
import links from "@/data/links";

/**next&react */
import type { NextPage } from "next";
import React from "react";

/**react-icons */

/**images */
import Bulb from "@/components/values-components/Bulb";
import Code from "@/components/values-components/Code";
import Bg1 from "@/components/background-components/Bg1";
import Bg2 from "@/components/background-components/Bg2";
import TwoCats from "@/components/background-components/TwoCats";
import Design from "@/components/values-components/Bulb";
import myBg from "public/assets/Home Page Illustration.svg";
import Bridge from "@/components/background-components/Bridge";
import BG5 from "@/components/background-components/BG5";
import MdBG5 from "@/components/background-components/mdBG5";
import BG4 from "@/components/events-components/BG4-md";
import Sm_team from "@/components/events-components/Sm_team";
import FourCards from "@/components/values-components/FourCards";
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
          className="relative z-20 w-full md:h-screen flex flex-col justify-center pb-10"
        >
          <>
            <PageWrapper className="w-full px-8 max-w-6xl mx-auto relative z-10 flex flex">
              <div className="grid md:grid-cols-2 max-w-[1240px] h-screen m-auto">
                <div className="flex flex-col justify-center shrink-1">
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
                    <ul className="flex items-center justify-start space-x-2 md:space-x-4 mb-8">
                      <p className="lg:text-lg">Powered by</p>
                      <img src="/assets/IBMLogo.png" alt="" />
                      <img src="/assets/gdsc.png" alt="" />
                    </ul>
                  </div>
                  <ul className="flex items-center justify-start space-x-2 md:space-x-4 mb-8">
                    <a
                      href={links.preRegister}
                      target="_blank"
                      rel="noreferrer"
                      className="shadow-xl bg-white text-highlight px-8 py-3 rounded-md text-center w-full sm:w-40 text-sm font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                    >
                      Register
                    </a>
                    <a
                      href={links.sponsorUs}
                      className="shadow-xl bg-[#8E0084] text-light px-8 py-3 rounded-md text-center w-full sm:w-40 text-sm font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                    >
                      Sponsor Us
                    </a>
                  </ul>
                </div>
                <div className="w-full z-20 flex flex-col justify-center relative ">
                  {/* <img src="/assets/tower.png" alt=""></img> */}
                  <Tower />
                </div>
              </div>
            </PageWrapper>
          </>
        </PageSection>
      </div>

      <div className="relative">
        <PageSection
          id="index-values"
          className="w-full flex flex-col justify-center relative z-10"
        >
          <PageWrapper className="w-full md:px-24 md:pb-14 max-w-6xl mx-auto grid grid-cols-1">
            <>
              <Bg2 />
              <ul className="w-full h-full grid grid-cols-2 lg:grid-cols-4 relative md:pb-8 md:pt-8 px-12 md:px-0">
                <div className="relative flex flex-col justify-center items-center">
                  <Card.hackers />
                </div>
                <div className="relative flex flex-col justify-center items-center ">
                  <Card.hours />
                </div>
                <div className="relative flex flex-col justify-center items-center">
                  <Card.projects />
                </div>
                <div className="relative flex flex-col justify-center items-center">
                  <Card.prizes />
                </div>
              </ul>
              <div>
                <ul className="relative z-20 w-full flex flex-row justify-center md:justify-start items-center text-center md:text-left">
                  <div className="w-full md:w-7/12 h-full flex flex-col md:justify-start md:items-start justify-center items-center px-8">
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
                  <div className="w-5/12 flex flex-col justify-center items-center hidden md:block">
                    <TwoCats />
                  </div>
                </ul>
              </div>
              <div>
                <ul className="relative z-20 w-full flex flex-row grid grid-cols-1 md:grid-cols-3 justify-center items-center sm:px-0 px-32 pb-8">
                  <div className="relative w-full text-center flex flex-col justify-center items-center ">
                    <Bulb />
                    <h1 className="designText text-white text-3xl 2xl:text-4xl pb-2 font-semibold">
                      DESIGN
                    </h1>
                    <h4 className="text-white text-lg lg:text-xl 2xl:text-2xl font-light">
                      Create something great, unique, and innovative. Bring your
                      ideas to life
                    </h4>
                  </div>
                  <div className="relative w-full text-center flex flex-col justify-center items-center px-8">
                    <Code />
                    <h1 className="designText text-white text-3xl 2xl:text-4xl pb-2 font-semibold">
                      CODE
                    </h1>
                    <h4 className="text-white text-lg lg:text-xl 2xl:text-2xl font-light">
                      Something groundbreaking. Build your idea to make the
                      World better.
                    </h4>
                  </div>
                  <div className="relative w-full text-center flex flex-col justify-center items-center px-8">
                    <div>
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

      <PageSection id="index-sponsors" className="flex justify-center relative">
        {/* brig svg */}
        <>
          <div className="relative">
            <Bridge />
          </div>

          <PageWrapper className="w-full pt-80 pb-28 ml-20 max-w-6xl mx-auto grid grid-cols-1 absolute content-center">
            <div className="absolute content-center">
              <div className="w-full mt-40 ml-[0] pb-10">
                <SectionTitle
                  title="Our Sponsors and Featured Events"
                  color="light"
                />
              </div>
              <div className="mt-20 animate-pulse mr-10">
                <Airplane />
              </div>
            </div>
          </PageWrapper>
        </>
      </PageSection>

      <PageSection id="index-events" className=" flex justify-center relative ">
        {/* brig svg */}
        <>
          <div className="relative lg:flex hidden">
            <Mountain />
          </div>
          <div className=" relative md:flex hidden">
            <BG4 />
          </div>

          <div className=" relative sm:flex hidden">
            <BG4 />
          </div>

          <PageWrapper className="w-full mt-20 pt-80 pb-28 ml-20 max-w-6xl mx-auto grid grid-cols-1 absolute content-center">
            <div className="absolute ">
              <div className="ml-[0] pb-10 mb-10 md:ml-12">
                <SectionTitle title="The Team" color="light" />
              </div>
              <div className="lg:block hidden">
                <div className="flex flex-row justify-between justify-center mr-48 mb-14 ">
                  <Team111 />
                </div>

                <div className="flex flex-row justify-between justify-center mr-32 mb-14">
                  <Team112 />
                </div>

                <div className="flex flex-row justify-between justify-center mr-32 mb-14 ">
                  <Team9 />
                </div>

                <div className="flex flex-row justify-between justify-center mr-32 mb-14 ">
                  <Team4 />
                </div>
                <div className="  inline">
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
                </div>
              </div>

              <div className="md:flex flex-start hidden -translate-y-72 -translate-x-14">
                <Md_member />
              </div>

              <div className="sm:flex flex-start hidden ">
                <Sm_team />
              </div>
            </div>
          </PageWrapper>
        </>
      </PageSection>

      <PageSection
        id="index-FAQ"
        className="min-h-screen w-full  flex justify-center relative "
      >
        <>
          <div className="md:relative lg:hidden sm:hidden">
            <MdBG5 />
          </div>
          <div className="lg:relative md:hidden sm:hidden">
            <BG5 />
          </div>
          <div className="sm:flex relative hidden">
            <MdBG5 />
          </div>

          <PageWrapper className="w-3/4 mt-20 ml-36 mr-48  backdrop-blur-sm   absolute">
            <>
              <SectionTitle title="FAQ" color="light" />
              <ul className="w-full grid grid-cols-1  gap-8 mt-16  ">
                {FAQItems.map((faq, index) => (
                  <FAQ {...faq} key={index} />
                ))}
              </ul>
              <div className="lg:mt-40 md:mt-36 sm:mt-32 mt-20">
                <SectionTitle title="Hackathon Countdown" color="light" />
                <div className="text-white  mb-20">
                  <CountDownTimer days={2} hours={0} minutes={1} seconds={0} />
                </div>
                <div className="">
                  <a
                    href={links.preRegister}
                    target="_blank"
                    rel="noreferrer"
                    className="shadow-xl bg-[#8E0084] text-white px-8 py-3 rounded-half text-center w-full sm:w-56 text-sm font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                  >
                    Pre-register
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

              <div className="md:flex flex-row w-3/4 -translate-y-24 hidden">
                <FootDesign />
              </div>
              <div className="sm:flex flex-row w-3/4 -translate-y-0 hidden">
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
