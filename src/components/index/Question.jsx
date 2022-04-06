import { useState } from "react";

export default function Question({ question, answer }) {
    /*
    useState(initialValue) -> [toggler, setToggler]

    setToggler(vairable) -> sets toggler to variable

    setToggler(function(current) {
        return !current
    })
    */

  const [toggler, setToggler] = useState(false);

  const onToggler = () => {
      setToggler(cur => !cur);
  }


  return (
    <div onClick={onToggler} className="w-full flex flex-col text-start font-semibold text-lg p-4 border border-slate-600 border-opacity-50  rounded justify-center items-start hover transition-all hover:bg-slate-100 hover:bg-opacity-10 cursor-pointer">
      <section>
        {" "}
        {/* contains question */}
        <h3 className="text-lg">{question}</h3>
      </section>
      {toggler && (
        <section>
          {" "}
          {/* contains answer toggle (open or close) */}
          <p className="font-medium text-base">{answer}</p>
        </section>
      )}
    </div>
  );
}

// toogler is True => show
// else hide
