/**components */
import PageSection from "@/components/reuseable-components/PageSection";
import PageWrapper from "@/components/reuseable-components/PageWrapper";
import SectionTitle from "@/components/reuseable-components/SectionTitle";
import Airplane from "@/components/events-components/Airplane";
import SEO from "@/components/reuseable-components/SEO";
import Card from "@/components/values-components/Card";
import FAQ from "@/components/faq-components/FAQ";

/**data */
import FAQItems from "@/data/faqs";
import AppTexts from "@/data/texts";
import links from "@/data/links";

/**next&react */
import type { NextPage } from "next";
import React from "react";

/**react-icons */
import { BsDiscord } from "react-icons/bs";

/**images */
import myBg from "public/assets/Home Page Illustration.svg";

const Home: NextPage = () => {
  return (
    <React.Fragment key="index">
      {/* PAGE SEO */}
      <SEO />

      {/* PAGE UI */}
      <PageSection
        id="index-hero"
        className="w-full h-screen flex flex-col justify-center bg-gradient-to-b from-sky-200 to-sky-300"
      >
        <PageWrapper className="w-full px-8 py-16 max-w-6xl mx-auto grid grid-cols-1">
          <>
            <div className="mb-6"> 
              <h2 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl mb-1">
                SacHacks IV
              </h2>
              <p className="text-base lg:text-lg 2xl:text-xl">
                Join Us Virtually On October 15-16, 2022
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-2xl lg:text-3xl 2xl:text-4xl mb-1">
                {AppTexts.KEYWORDS.join(", ")}
              </h3>
              <p className="lg:text-lg">
                Powered by <strong>IBM</strong> and <strong>GDSC @ UCD</strong>
              </p>
            </div>

            <div>
              <p className="font-normal text-sm leading-6 lg:text-base lg:leading-7 2xl:text-lg 2xl:leading-8 mb-6">
                SacHacks is the first major intercollegiate hackathon in the
                Sacramento, California area. Our passion is to cultivate the
                untapped potential of those in Sac and beyond by launching their
                ideas into action during a 24-hour hackathon.
              </p>
              <ul className="flex items-center justify-start space-x-2 md:space-x-4 mb-8">
                <a
                  href={links.preRegister}
                  target="_blank"
                  rel="noreferrer"
                  className="shadow-xl bg-light text-highlight px-8 py-3 rounded-full text-center w-full sm:w-56 text-sm font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                >
                  Pre-register
                </a>
                <a
                  href={links.sponsorUs}
                  className="shadow-xl bg-highlight text-light px-8 py-3 rounded-full text-center w-full sm:w-56 text-sm font-semibold lg:text-base transition-all lg:hover:opacity-75 lg:hover:shadow-sm"
                >
                  Sponsor Us
                </a>
              </ul>
              <div>
                <a
                  href="https://discord.com/invite/cWjFh4XxyZ"
                  className="flex space-x-2 items-center text-lg font-semibold justify-start transition-all lg:hover:text-blue-500"
                >
                  <span>Discord</span>
                  <BsDiscord className="text-xl" />
                </a>
              </div>
            </div>
          </>
        </PageWrapper>
      </PageSection>

      <PageSection
        id="index-values"
        className="w-full flex flex-col justify-center bg-gradient-to-b from-sky-300 to-highlight/10"
      >
        <PageWrapper className="w-full px-8 pt-28 pb-14 max-w-6xl mx-auto grid grid-cols-1">
          <>
            <SectionTitle title="Our Values" color="dark" />
            <ul className="w-full h-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="relative w-full h-80 flex flex-col justify-between items-center overflow-hidden rounded-xl shadow-xl backdrop-blur-sm bg-gradient-to-b from-sky-100/75 to-sky-300/75">
                <article className="relative z-10 p-8 flex flex-col items-center space-y-4">
                  <h4 className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
                    Design
                  </h4>
                </article>
                <Card.design />
                <div className="absolute cursor-pointer opacity-0 ease-out backdrop-blur-md  hover:opacity-100 bottom-0 transform transition-all w-full h-full flex flex-col justify-center p-8">
                  <p className="text-center text-lg">
                    Create something great, unique, and innovative. Bring your
                    ideas to life.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-80 flex flex-col justify-between items-center overflow-hidden rounded-xl shadow-xl backdrop-blur-sm bg-gradient-to-b from-sky-100/75 to-sky-300/75">
                <article className="relative z-10 p-8 flex flex-col items-center space-y-4">
                  <h4 className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
                    Code
                  </h4>
                </article>
                <Card.code />
                <div className="absolute cursor-pointer opacity-0 ease-out backdrop-blur-md  hover:opacity-100 bottom-0 transform transition-all w-full h-full flex flex-col justify-center p-8">
                  <p className="text-center text-lg">
                    Something groundbreaking. Build your idea to make the World
                    better.
                  </p>
                </div>
              </div>{" "}
              <div className="relative w-full h-80 flex flex-col justify-between items-center overflow-hidden rounded-xl shadow-xl backdrop-blur-sm bg-gradient-to-b from-sky-100/75 to-sky-300/75">
                <article className="relative z-10 p-8 flex flex-col items-center space-y-4">
                  <h4 className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
                    Launch
                  </h4>
                </article>
                <Card.launch />
                <div className="absolute cursor-pointer opacity-0 ease-out backdrop-blur-md  hover:opacity-100 bottom-0 transform transition-all w-full h-full flex flex-col justify-center p-8">
                  <p className="text-center text-lg">
                    Something big. Pitch your ideas to our panel of judges who
                    are the best in their field.
                  </p>
                </div>
              </div>
            </ul>
          </>
        </PageWrapper>
      </PageSection>
      <PageSection
        id="index-events"
        className="w-full flex flex-col justify-center bg-gradient-to-b from-highlight/10 to-sky-300/50"
      >
        <PageWrapper className="w-full px-8 pt-14 pb-28 max-w-6xl mx-auto grid grid-cols-1">
          <>
            <SectionTitle title="Featured Events" color="dark" />
            <div className="mt-16 animate-pulse">
              <Airplane />
            </div>
          </>
        </PageWrapper>
      </PageSection>
      <PageSection
        id="index-FAQ"
        className="min-h-screen w-full p-8 flex flex-col justify-center bg-gradient-to-b from-sky-300/50 to-sky-200"
      >
        <PageWrapper className="w-full p-8 max-w-6xl mx-auto bg-sky-200/70 backdrop-blur-sm shadow-xl rounded-xl grid grid-cols-1">
          <>
            <SectionTitle title="FAQ" color="dark" />
            <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16  ">
              {FAQItems.map((faq, index) => (
                <FAQ {...faq} key={index} />
              ))}
            </ul>
          </>
        </PageWrapper>
      </PageSection>
      <PageSection
        id="index-sponsors"
        className="w-full flex flex-col justify-center bg-gradient-to-b from-sky-200 to-sky-300/50"
      >
        <PageWrapper className="w-full px-8 pt-14 pb-28 max-w-6xl mx-auto grid grid-cols-1">
          <>
            <SectionTitle title="Sponsors" color="dark" />
            <div className="mt-16 animate-pulse">
              <Airplane />
            </div>
          </>
        </PageWrapper>
      </PageSection>
    </React.Fragment>
  );
};
export default Home;
