/**components */
import AppTexts from "@/data/texts";
/**next&react */
import Link from "next/link";
import TestHeaderTitle from "../background-components/TestHeaderTitle";

const HeadTitle: HeadTitleComponent = ({ mountedIn }) => {
  return (
    <h1 className="flex items-center space-x-2 font-bold text-xl">
      <Link href="/">
        <>
          {/* <span className="w-8 h-8 rounded-full bg-highlight" /> */}
          <img
            src="assets//Mask.png"
            alt=""
            className="relative pr-4 stransform "
          />
          <a className="flex flex-col items-center" href="#index-hero">
            <span><TestHeaderTitle/></span>
            {mountedIn === "footer" && (
              <span className="font-thin text-sm">
                {AppTexts.KEYWORDS.join(", ")}
              </span>
            )}
          </a>
        </>
      </Link>
    </h1>
  );
};

export default HeadTitle;
