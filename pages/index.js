/* eslint-disable @next/next/no-sync-scripts */
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Fragment } from 'react';

const Route = dynamic(() => import('../src/reusable/Route'));

const TopText = dynamic(() => import('../src/components/index/TopText'));
const MiddleCards = dynamic(() =>
  import('../src/components/index/MiddleCards')
);
const FeaturedEvents = dynamic(() =>
  import('../src/components/index/FeaturedEvents')
);
const BottomFAQ = dynamic(() => import('../src/components/index/BottomFAQ'));

export default function Home() {
  return (
    <Fragment>
      {/* <div id="home-top" className="w-full px-8 md:px-12 lg:px-20"> */}
      <TopText />
      <MiddleCards />
      {/* </div>
      <div id="home-bottom" className="w-full px-8 md:px-12 lg:px-20"> */}
      <FeaturedEvents />
      <BottomFAQ />
      {/* </div> */}
    </Fragment>
  );
}
