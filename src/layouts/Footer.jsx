import dynamic from "next/dynamic";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Route = dynamic(() => import("../reusable/Route"));
const Monument = dynamic(() => import("../design/Monument"));
const Ground = dynamic(() => import("../design/Ground"));

export default function Footer() {
  return (
    <footer id="footer" className="w-full relative bg-sky-50">
      <section className="bg-transparent mx-auto relative z-30 px-8 py-8 xl:pb-0 flex flex-col lg:flex-row items-start justify-start gap-8 w-full md:px-12 lg:px-20">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h3 className="flex items-center gap-4">
            <span className="animate-spin w-8 h-8  bg-mainColor rounded-md"></span>{" "}
            <span className="text-2xl font-bold">SacHack</span>
          </h3>
          <p className="font-semibold text-lg text-center">Design. Code. Launch.</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          {/* <Route href={"/"} text={"Home"} className={"text-slate-700 font-semibold"} />
                    <Route href={"/"} text={"Our Values"} className={"text-slate-700 font-semibold"} />
                    <Route href={"/"} text={"Featured Events"} className={"text-slate-700 font-semibold"} />
                    <Route href={"/"} text={"FAQ"} className={"text-slate-700 font-semibold"} />
                    <Route href={"/"} text={"Sponsors"} className={"text-slate-700 font-semibold"} /> */}
          <a href="#home-text">Home</a>
          <a href="#home-cards">About</a>
          <a href="#home-events">Events</a>
          <a href="#home-faq">FAQ</a>
          <a href="#">Sponsors</a>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <Route
            href={"/"}
            text={"Join Us"}
            className={" font-semibold"}
          />
          <ul className="flex flex-col justify-center items-start gap-2 pl-4 border-l-2 border-slate-800">
            <Route
              href={"/"}
              text={"Mentors"}
              className={" font-semibold"}
            />
            <Route
              href={"/"}
              text={"Hackers"}
              className={" font-semibold"}
            />
            <Route
              href={"/"}
              text={"Sponsor Us"}
              className={" font-semibold"}
            />
          </ul>
          <Route
            href={"/"}
            text={"MLH Code of Conduct"}
            className={" font-semibold text-center"}
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-2">
          <h3 className="font-semibold text-lg text-center">Follow us on social media</h3>
          <section className="w-full flex justify-center items-center gap-4">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </section>
        </div>
        <div className="w-full relative -top-72 -mb-52 hidden xl:flex flex-col justify-start items-center gap-2">
        <Monument className={"w-full relative  z-50"} />
        </div>
      </section>

      <Ground className={"hidden xl:block absolute right-0 p-0 top-0  z-10"} /> 
    </footer>
  );
}
