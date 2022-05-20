/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
// const Route = dynamic(() => import("../reusable/Route"));

import LogoImage from '../img/smaller-2.png';

const Popup = dynamic(() => import('../design/Popup'));
const Modal = dynamic(() => import('../layouts/Modal'));

export default function Header({ scroller }) {
  return (
    <header
      className={
        scroller
          ? 'w-full transition-all z-50 fixed top-0 bg-slate-50/10 backdrop-blur-md shadow-md'
          : 'w-full z-50 transition-all fixed top-0 bg-transparent shadow-none backdrop-blur-md'
      }
    >
      <section
        className={
          scroller
            ? 'w-full max-w-6xl mx-auto transition-all py-4 flex justify-between md:justify-start items-center space-x-4'
            : 'w-full max-w-6xl mx-auto transition-all  py-4 flex justify-between md:justify-start items-center space-x-4'
        }
      >
        <div className="w-auto flex items-center gap-2">
          <h1 className="font-bold pl-8 xl:pl-0">
            <Link href={'/'}>
              <a>
                <img
                  className="w-40 bg-slate-900/90 rounded-full px-3 py-2"
                  src={LogoImage.src}
                  alt="SacHacks 2022 Logo Image"
                />
              </a>
            </Link>
          </h1>
        </div>

        {/* desktop version navigation */}
        <nav className="hidden md:flex jusitfy-center items-center gap-4 flex-wrap">
          {/* <Route href={"#home-text"} text={"Home"} className={"text-slate-800 font-semibold"} />
          <Route href={"#home-cards"} text={"About"} className={"text-slate-800 font-semibold"} />
          <Route href={"#home-events"} text={"Events"} className={"text-slate-800 font-semibold"} />
          <Route href={"#home-faq"} text={"FAQ"} className={"text-slate-800 font-semibold"} />
          <Route href={"#"} text={"Sponsors"} className={"text-slate-800 font-semibold"} /> */}
          <a href="#home-text">Home</a>
          <a href="#home-cards">About</a>
          <a href="#home-events">Events</a>
          <a href="#home-faq">FAQ</a>
          <a href="#">Sponsors</a>
        </nav>

        {/* mobile version navigation */}
        <button
          className={
            scroller
              ? 'w-max flex md:hidden flex-col items-center pr-8'
              : 'hidden'
          }
        >
          <CgMenuGridR className="text-2xl" />
        </button>
        {/* popup stays on top */}
        <a
          className={
            scroller
              ? 'hidden transition-all fixed -top-48 right-8 rounded-b-lg shadow-lg'
              : 'flex flex-col md:hidden items-center transition-all fixed top-0 right-8'
          }
          href="https://mlh.io/"
        >
          <Popup className={scroller ? '' : ''} />
        </a>
      </section>
    </header>
  );
}
