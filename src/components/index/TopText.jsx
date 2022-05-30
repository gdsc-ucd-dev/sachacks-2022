/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import GDSCLogo from '../../../public/gdsc_logo.png';
import IBMLogo from '../../../public/ibm_logo.png';
import { BsDiscord } from 'react-icons/bs';
export default function TopText() {
  return (
    <section id="introduction" className="relative w-full">
      <div className="py-28 max-w-6xl relative mx-auto px-8 min-h-screen flex flex-col justify-center items-start w-full">
        <section className="w-full mx-auto relative z-30 flex flex-col justify-center items-center space-y-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-5xl xl:text-6xl font-bold w-full text-left md:text-center">
              SacHacks 2022
            </h2>
            <p className="mb-4 font-semibold text-lg lg:text-xl xl:text-2xl text-left md:text-center w-full">
              SacHacks IV
            </p>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-8">
              Design. Code. Launch.
            </h4>
            <div className="flex flex-row space-x-1 mb-4 mt-1 text-base md:text-lg lg:text-xl">
              <span>Co-hosted by</span>
              <span className="font-bold">IBM</span>
              <span>and</span>
              <span className="font-bold">GDSC @ UCD</span>
            </div>
            <p className="text-xl font-bold px-5 py-3 bg-slate-800 text-slate-50 rounded-3xl text-center w-full">
              Join us in-person or Virtually on October 15-16.
            </p>
          </div>

          <p className="w-full max-w-4xl mx-auto my-4 text-center font-semibold text-lg leading-9 lg:text-xl lg:leading-loose">
            SacHacks is the first major intercollegiate hackathon in the
            Sacramento, California area. Our passion is to cultivate the
            untapped potential of those in Sac and beyond by launching their
            ideas into action during a 24-hour hackathon.
          </p>
          <div className="flex items-center justify-center w-full space-x-4">
            <a
              href="https://bit.ly/joinsachacks"
              className="py-2 px-4 bg-gray-100 shadow-lg rounded-lg text-lg font-semibold transition-all hover hover:bg-white/90 hover:shadow-xl hover:shadow-black/10"
            >
              Join Team
            </a>
            <a
              href="mailto:contact@sachacks.io"
              className="py-2 px-4 bg-slate-800 text-white shadow-lg rounded-lg text-lg font-semibold transition-all hover hover:bg-slate-800/80 hover:shadow-xl hover:shadow-black/10"
            >
              Sponsor Us
            </a>
          </div>
          <div className="mt-8 w-full">
            <a
              className="w-max mx-auto flex items-center justify-center space-x-2 underline underline-offset-2 text-2xl font-bold transition-all transform hover hover:scale-110"
              href="https://bit.ly/SacHacksDiscord"
            >
              <BsDiscord />
              <span>Discord</span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
