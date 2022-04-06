import dynamic from "next/dynamic"

const Question = dynamic(() => import("./Question"));

const FakeQuestions = [
  {
    question: "When is the event starting?",
    answer: "The event will take place on someday really soon. Hope to see you then!"
  },
  {
    question: "Who can register for the event?",
    answer: "Anyone! If you are interested in showcasing your skills, please register today!"
  },
  {
    question: "When is the event starting?",
    answer: "The event will take place on someday really soon. Hope to see you then!"
  },
  {
    question: "Who can register for the event?",
    answer: "Anyone! If you are interested in showcasing your skills, please register today!"
  },
  {
    question: "When is the event starting?",
    answer: "The event will take place on someday really soon. Hope to see you then!"
  },
  {
    question: "Who can register for the event?",
    answer: "Anyone! If you are interested in showcasing your skills, please register today!"
  },
]

export default function BottomFAQ () {
    return (
      <section className="w-full">
                <div id="home-faq" className="w-full max-w-6xl mx-auto px-8 pb-16 flex flex-col justify-center items-start">
        <section className="w-full lg:w-10/12 flex flex-col jusitfy-start items-start p-8 gap-8 shadow-lg rounded-lg bg-opacity-50 bg-slate-50">
          <div><h3 className="font-bold text-2xl">FAQ</h3></div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {FakeQuestions.map((each, index) => (
              <Question key={index} question={each.question} answer={each.answer} />
            ))}
          </div>
        </section>
      </div>
      </section>
    )
}
