/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import HeaderLink from '../components/index/reusable/HeaderLink';
import Logo from '../components/index/reusable/Logo';
import { pageLinks } from '../data';
// const Route = dynamic(() => import("../reusable/Route"));

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
          <Logo />
        </div>

        {/* desktop version navigation */}
        <nav className="hidden md:flex jusitfy-center items-center gap-4 flex-wrap">
          {pageLinks.map((link, index) => (
            <HeaderLink key={index} {...link} />
          ))}
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
              : 'flex flex-col items-center transition-all fixed top-0 right-8'
          }
          href="https://mlh.io/"
        >
          <Popup className={scroller ? '' : ''} />
        </a>
      </section>
    </header>
  );
}
