/**components */
import Image from 'next/image'
import PageSection from "@/components/reuseable-components/PageSection";
import PageWrapper from "@/components/reuseable-components/PageWrapper";
import SectionTitle from "@/components/reuseable-components/SectionTitle";
import Airplane from "@/components/events-components/Airplane";
import Team1 from "@/components/events-components/member";
import Team111 from "@/components/events-components/member111";
import Team112 from "@/components/events-components/member112";
import Team13 from "@/components/events-components/member13";
import Team5 from "@/components/events-components/member5";
import Team6 from "@/components/events-components/member6";
import Team7 from "@/components/events-components/member7";
import Team8 from "@/components/events-components/member8";
import Team9 from "@/components/events-components/member9";
import Team2 from "@/components/events-components/member1";
import Team4 from "@/components/events-components/member4";
import SEO from "@/components/reuseable-components/SEO";
import Card from "@/components/values-components/Card";
import FAQ from "@/components/faq-components/FAQ";
import Mountain from "@/components/background-components/Mountain";
import TeamDesign from "@/components/events-components/teamDesign";
 import CountDownTimer from '@/components/events-components/countdown';
 import FootDesign1 from '@/components/events-components/footDesign1';
 import FootDesign2 from '@/components/events-components/footDesign2';
 import FootDesign3 from '@/components/events-components/footDesign3';
 import FootDesign from '@/components/events-components/footDesign';
 import Md_member from "@/components/events-components/md_member";
 import Sm_footer from '@/components/events-components/Sm_footer';
 

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
import Bridge from "@/components/background-components/Bridge";
import BG5 from "@/components/background-components/BG5";
import MdBG5 from "@/components/background-components/mdBG5";
import BG4 from "@/components/events-components/BG4-md";
import Sm_team from '@/components/events-components/Sm_team';

const Home: NextPage = () => {
  return (
    <React.Fragment key="index">
      {/* PAGE SEO */}
      <SEO />

      {/* PAGE UI */}
      <div className="relative">
        {/* <span className="h-full w-screen absolute flex justify-center"><Mountain/></span> */}

        {/* most recent edit */}
        {/* <Mountain /> */}

        {/* <div className="md:block w-full overflow-hidden hidden absolute z-0 top-0 left-0 ">
          <Mountain />
        </div> */}
        {/* <TestMountain /> */}
        <PageSection
          id="index-hero"
          className="relative z-20 w-full h-screen flex flex-col justify-center bg-transparent"
        >
          {/* test mountain with new svg */}
          <>
            <PageWrapper className="w-full px-8 py-16 max-w-6xl mx-auto grid grid-cols-1 relative z-10">
              <div className="relative">
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
                    Powered by <strong>IBM</strong> and{" "}
                    <strong>GDSC @ UCD</strong>
                  </p>
                </div>

                <div>
                  <p className="font-normal text-sm leading-6 lg:text-base lg:leading-7 2xl:text-lg 2xl:leading-8 mb-6 max-w-2xl">
                    SacHacks is the first major intercollegiate hackathon in the
                    Sacramento, California area. Our passion is to cultivate the
                    untapped potential of those in Sac and beyond by launching
                    their ideas into action during a 24-hour hackathon.
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
              </div>
            </PageWrapper>
          </>
        </PageSection>

        <PageSection
          id="index-values"
          className="w-full flex flex-col justify-center bg-transparent relative z-10"
        >
          <PageWrapper className="w-full px-8 pt-28 pb-14 max-w-6xl mx-auto grid grid-cols-1">
            <>
              <SectionTitle title="Our Values" color="dark" />
              <ul className="w-full h-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 relative">
                <div className="relative w-full h-80 flex flex-col justify-between items-center overflow-hidden rounded-xl shadow-xl backdrop-blur-sm bg-gradient-to-b from-sky-100/90 to-sky-300/90">
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
                <div className="relative w-full h-80 flex flex-col justify-between items-center overflow-hidden rounded-xl shadow-xl backdrop-blur-sm bg-gradient-to-b from-sky-100/90 to-sky-300/90">
                  <article className="relative z-10 p-8 flex flex-col items-center space-y-4">
                    <h4 className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
                      Code
                    </h4>
                  </article>
                  <Card.code />
                  <div className="absolute cursor-pointer opacity-0 ease-out backdrop-blur-md  hover:opacity-100 bottom-0 transform transition-all w-full h-full flex flex-col justify-center p-8">
                    <p className="text-center text-lg">
                      Something groundbreaking. Build your idea to make the
                      World better.
                    </p>
                  </div>
                </div>{" "}
                <div className="relative w-full h-80 flex flex-col justify-between items-center overflow-hidden rounded-xl shadow-xl backdrop-blur-sm bg-gradient-to-b from-sky-100/90 to-sky-300/90">
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
      </div>

      <PageSection
        id="index-sponsors"
        className="flex justify-center relative"
      >
        {/* brig svg */}
        <>
        <div className="relative"> 
        <Bridge />
        </div>
          
          <PageWrapper className="w-full pt-80 pb-28 ml-20 max-w-6xl mx-auto grid grid-cols-1 absolute content-center">
            <div className="absolute content-center">
              <div className="w-full mt-40 ml-[0] pb-10"><SectionTitle title="Our Sponsors and Featured Events" color="light" />
            </div>
                <div className="mt-20 animate-pulse mr-10">
                <Airplane />
              </div>
            </div>
          </PageWrapper>
        </>
      </PageSection>

      <PageSection
        id="index-events"
        className=" flex justify-center relative "
      >
        {/* brig svg */}
        <>
        <div className="relative lg:flex hidden"> 
        <Mountain />
        
        </div>
        <div className=' relative md:flex hidden'>
        <BG4 />
        </div>

        <div className=' relative sm:flex hidden'>
        <BG4 />
        </div>
          
          
          <PageWrapper className="w-full mt-20 pt-80 pb-28 ml-20 max-w-6xl mx-auto grid grid-cols-1 absolute content-center">
            <div className="absolute ">
              <div className="ml-[0] pb-10 mb-10 md:ml-12"><SectionTitle title="The Team" color="light" />
            </div>
            <div className='lg:block hidden'>
                {/* <div className=" block pb-14">
                
               <div className='pr-28 inline'><Team11 /></div>  <div className='pr-28 inline'> <Team12 /></div> 
               <div className='pr-24 inline'><Team13 /></div>  <div className='pr-28 inline'> <Team2 /></div>
              </div> */}
              <div className='flex flex-row justify-between justify-center mr-48 mb-14 '>
              <Team111 /> 
              </div>

              {/* <div className="   block pb-14">
                
              <div className='pr-28 inline'><Team1 /></div>  <div className='pr-28 inline'> <Team2 /></div> 
               <div className='pr-28 inline'><Team1 /></div>  <div className='pr-28 inline'> <Team2 /></div>
              </div> */}
            <div className='flex flex-row justify-between justify-center mr-32 mb-14'>
              <Team112 />
              </div>

              {/* <div className=" block pb-14">
                
              <div className='pr-28 inline'><Team1 /></div>  <div className='pr-28 inline'> <Team2 /></div> 
               <div className='pr-28 inline'><Team1 /></div>  <div className='pr-28 inline'> <Team2 /></div>
              </div> */}
               <div className='flex flex-row justify-between justify-center mr-32 mb-14 '>
              <Team9 /> 
              </div>
              {/* <div className=" block pb-14">
                
              <div className='pr-28 inline'><Team1 /></div>  <div className='pr-28 inline'> <Team2 /></div> 
               <div className='pr-28 inline'><Team1 /></div>  <div className='pr-28 inline'> <Team2 /></div>
              </div> */}
               <div className='flex flex-row justify-between justify-center mr-32 mb-14 '>
              <Team4 /> 
              </div>
              <div className="  inline">
                
              <div className='pr-28 inline'><Team1 /></div>  <div className=' inline'> <Team2 /></div> 
              <div className='pl-60 -translate-y-80 mt-10'>
              <TeamDesign />
              </div>
              </div>
              </div>

              <div className='md:flex flex-start hidden -translate-y-72 -translate-x-14'>
                <Md_member />
              </div>

              <div className='sm:flex flex-start hidden '>
                <Sm_team />
              </div>
              
            </div>
          </PageWrapper>
        </>
      </PageSection>

      <PageSection
        id="index-FAQ"
        className="min-h-screen w-full  flex justify-center relative " >
          
          <><div className="md:relative lg:hidden sm:hidden"> 
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
            <ul className="w-full grid grid-cols-1  gap-8 mt-16  " >
              {FAQItems.map((faq, index) => (
                <FAQ {...faq} key={index} />
              ))}
            </ul>
            <div className='lg:mt-40 md:mt-36 sm:mt-32 mt-20'>
            <SectionTitle title="Hackathon Countdown" color="light" />
            <div className='text-white  mb-20'>
        <CountDownTimer days={2} hours={0} minutes={1} seconds={0}/>
        </div>
        <div className=''>
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
<div className='lg:flex flex-row w-3/4 hidden '>
  <div className='translate-y-16'>
  <FootDesign1 /> 
  </div>
 
<div className='-translate-y-10 ml-[8%]'>
<FootDesign2 />
</div>
<div className='-translate-y-40 ml-[8%]'>
<FootDesign3 />
</div>

</div>

<div className='md:flex flex-row w-3/4 -translate-y-24 hidden'>
  <FootDesign />
</div>
<div className='sm:flex flex-row w-3/4 -translate-y-0 hidden'>
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
