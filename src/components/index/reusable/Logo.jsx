/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import LogoImage from '../../../img/smaller-2.png';
const Logo = () => {
  return (
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
  );
};

export default Logo;
