import HeadTitle from "../reuseable-components/HeadTitle";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-sky-100">
      <section className="px-4 lg:px-8 max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-10 gap-8 place-items-start">
        <div className="w-full flex flex-col items-center lg:items-start lg:col-span-2">
          <HeadTitle mountedIn="footer" />
        </div>
        <div className="capitalize lg:col-span-2">
          <ul className="text-sm flex flex-col space-y-1 items-start">
            <li>
              <a href="#index-hero">Home</a>
            </li>
            <li>
              <a href="#index-values">Our Values</a>
            </li>
            <li>
              <a href="#index-events">Featured Events</a>
            </li>
            <li>
              <a href="#index-FAQ">FAQ</a>
            </li>
            <li>
              <a href="#index-sponsors">Sponsors</a>
            </li>
          </ul>
        </div>
        <div className="capitalize lg:col-span-2">
          <h5 className="mb-3">Join Us</h5>
          <ul className="text-sm pl-4 flex flex-col items-start space-y-1 mb-3 border-l-2 border-highlight">
            <li>
              <a>Mentors</a>
            </li>
            <li>
              <a>Hackers</a>
            </li>
            <li>
              <a>Sponsor Us</a>
            </li>
          </ul>
          <a href="">MLH CODE OF CONDUCT</a>
        </div>
        <div className="w-full flex flex-col items-center lg:items-start lg:col-span-4">
          <h6 className="text-center mb-2">Follow us on social media</h6>
          <ul className="flex justify-start space-x-4">
            <li>
              <a href="" data-link="facebook">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="" data-link="instagram">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="" data-link="twitter">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
