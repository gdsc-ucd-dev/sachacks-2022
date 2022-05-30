import dynamic from 'next/dynamic';
import { QUESTIONS } from '../../data';
import Question from './Question';

export default function BottomFAQ() {
  return (
    <section className="w-full">
      <div
        id="FAQs"
        className="w-full max-w-6xl mx-auto px-8 pb-16 flex flex-col justify-center items-start"
      >
        <section className="w-full lg:w-10/12 flex flex-col jusitfy-start items-start p-8 gap-8 shadow-lg rounded-lg bg-opacity-50 bg-slate-50">
          <div>
            <h3 className="font-bold text-2xl">FAQ</h3>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {QUESTIONS.map((each, index) => (
              <Question
                key={index}
                question={each.Q}
                answer={each.A}
                links={each.links}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
