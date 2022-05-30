import { useState } from 'react';
import { classJoin } from '../../../lib/classJoin';

export default function Card({ text, description, children }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const onMouseChange = () => {
    if (isMouseOver) setIsMouseOver(false);
    else setIsMouseOver(true);
  };
  return (
    <article
      onMouseOver={onMouseChange}
      onMouseOut={onMouseChange}
      className="w-full relative h-96 flex flex-col justify-center items-center shadow-lg backdrop-blur-md bg-gradient-to-b from-white/50 via-white-30 to-white/5 rounded-3xl overflow-hidden"
    >
      <section className="h-full px-4 py-12 flex flex-col justify-between items-center">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">{text}</h3>
        {/* if user mouse over the card, we vanish the children & show the description */}
        <div
          className={classJoin(
            'transition-all ease-in transform h-full flex flex-col justify-end',
            isMouseOver
              ? 'opacity-0 translate-y-full'
              : 'opacity-100 translate-y-0'
          )}
        >
          {children}
        </div>
        <div
          className={classJoin(
            'transition-all ease-in w-full p-8 absolute left-1/2 text-black transform -translate-x-1/2',
            !isMouseOver
              ? 'opacity-0 bottom-full'
              : 'opacity-100 -translate-y-1/2 top-1/2'
          )}
        >
          <p className="leading-loose font-bold text-xl text-center text-mainColor/80">
            {description}
          </p>
        </div>
      </section>
    </article>
  );
}
