/**components */
import AppTexts from "@/data/texts";

/**next&react */
import Link from "next/link";

const HeadTitle: HeadTitleComponent = ({ mountedIn }) => {
  return (
    <h1 className="flex items-center space-x-2 font-bold text-xl">
      <Link href="/">
        <>
          {/* <span className="w-8 h-8 rounded-full bg-highlight" /> */}
          {/* <img
            src="assets/rocket.png"
            alt=""
            className="relative top-4 transform "
          /> */}
          <a className="flex flex-col items-center" href="#index-hero">
            <span>{AppTexts.TITLE}</span>
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
