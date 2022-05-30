import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import BackgroundImage from '../img/BackgroundImage';

// layout components
const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));
const Main = dynamic(() => import('./Main'));

export default function Layout({ children }) {
  const [scroller, setScroller] = useState(false);
  const onScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setScroller(true);
    } else {
      setScroller(false);
    }
  };
  useEffect(() => {
    window.onscroll = () => {
      onScroll();
    };
  }, [scroller]);

  return (
    <div
      id="layout"
      className="w-full text-mainColor  font-poppins bg-transparent relative flex flex-col justify-start items-center min-h-screen"
    >
      <Head>
        <title>SacHack | Welcome</title>
      </Head>
      <BackgroundImage />
      <Header scroller={scroller} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
