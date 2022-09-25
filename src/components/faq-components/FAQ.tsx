/**react&next */
import { useState } from "react";

/**react-icons */
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

/**utility functions */
import join from "@/utils/join";

const FAQ: FAQComponent = ({ Q, A, links }) => {
  const [answerView, setAnswerView] = useState<boolean>(false);
  const onClickAnswerView = () => {
    setAnswerView((current) => !current);
  };
  return (
    <article>
      <h3
        onClick={onClickAnswerView}
        className={join(
          "transition-all flex justify-between items-center text-white ease-in-out cursor-pointer lg:hover:opacity-50 lg:hover:px-2",
          answerView ? "font-semibold" : "font-normal"
        )}
      >
        <span className="w-full">{Q}</span>
        {answerView ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
      </h3>
      <div className="flex-grow border-t border-[#8E0084] mt-4"></div>
      <p
        className={join(
          "transition-all font-light text-white text-sm lg:text-base leading-6 lg:leading-7",
          answerView ? "block mt-3" : "mt-0 hidden"
        )}
      >
        
        {A}
        {links && (
          <ul className="flex justify-start items-center space-x-4" color="light">
            {links.map((link, index) => (
              <a
                key={index}
                href={link}
                className="text-white-500 transition-all lg:hover:text-white-500/50"
              >
               <u>Click here</u> 
              </a>
            ))}
          </ul>
        )}
      </p>
    </article>
  );
};
export default FAQ;
