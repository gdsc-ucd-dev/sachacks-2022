import dynamic from 'next/dynamic';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from '../components/index/reusable/Logo';
import { socialLinks } from '../data';
import Route from '../reusable/Route';
import Monument from '../design/Monument';
import Ground from '../design/Ground';

let sociaLinksWithIcon = socialLinks.map((linkObject) => {
  switch (linkObject.key) {
    case 'facebook':
      linkObject.icon = <BsFacebook className="text-2xl lg:text-3xl" />;
      break;
    case 'instagram':
      linkObject.icon = <BsInstagram className="text-2xl lg:text-3xl" />;
      break;
    case 'twitter':
      linkObject.icon = <BsTwitter className="text-2xl lg:text-3xl" />;
      break;
    default:
      linkObject.icon = null;
      break;
  }

  return linkObject;
});

export default function Footer() {
  return (
    <footer id="footer" className="w-full relative bg-sky-50">
      <section className="bg-transparent mx-auto relative z-30 px-8 py-8 xl:pb-0 flex flex-col lg:flex-row items-start justify-start gap-8 w-full md:px-12 lg:px-20">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <Logo />
          <p className="font-semibold text-lg text-center">
            Design. Code. Launch.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <a href="#introduction">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#FAQs">FAQ</a>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <Route href={'/'} text={'Join Us'} className={' font-semibold'} />
          <ul className="flex flex-col justify-center items-start gap-2 pl-4 border-l-2 border-slate-800">
            <Route href={'/'} text={'Mentors'} className={' font-semibold'} />
            <Route href={'/'} text={'Hackers'} className={' font-semibold'} />
            <Route
              href={'/'}
              text={'Sponsor Us'}
              className={' font-semibold'}
            />
          </ul>
          <Route
            href={'/'}
            text={'MLH Code of Conduct'}
            className={' font-semibold text-center'}
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-2">
          <h3 className="font-semibold text-lg text-center">
            Follow us on social media
          </h3>
          <section className="w-full flex justify-center items-center gap-4">
            {sociaLinksWithIcon.map((link, index) => (
              <a
                className="transition-all hover transform rotate-0 hover:rotate-[35deg]"
                href={link.href}
                key={index}
              >
                {link.icon}
              </a>
            ))}
          </section>
        </div>
        <div className="w-full relative -top-72 -mb-52 hidden xl:flex flex-col justify-start items-center gap-2">
          <Monument className={'w-full relative  z-50'} />
        </div>
      </section>

      <Ground className={'hidden xl:block absolute right-0 p-0 top-0  z-10'} />
    </footer>
  );
}
