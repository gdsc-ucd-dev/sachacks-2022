import { useState } from 'react';
import { classJoin } from '../../lib/classJoin';

export default function Question({ question, answer, links }) {
  const [toggler, setToggler] = useState(false);

  const onToggler = () => {
    setToggler((cur) => !cur);
  };

  return (
    <div
      onClick={onToggler}
      className={classJoin(
        'w-full h-max flex flex-col text-start font-semibold text-lg p-4 border border-slate-600 border-opacity-50  rounded justify-start items-start cursor-pointer transition-all'
      )}
    >
      <section>
        {' '}
        {/* contains question */}
        <h3 className="text-lg">{question}</h3>
      </section>
      {toggler && (
        <section>
          {' '}
          {/* contains answer toggle (open or close) */}
          <p className="font-medium text-base">
            <span className="pr-2">{answer}</span>
            {links &&
              links.map((link, index) => (
                <a
                  className="inline-block text-blue-500 font-semibold underline"
                  key={index}
                  href={link}
                >
                  Follow Link
                </a>
              ))}
          </p>
        </section>
      )}
    </div>
  );
}

// toogler is True => show
// else hide
