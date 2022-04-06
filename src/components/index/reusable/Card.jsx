export default function Card ({text, children}) {
    return (
        <article className="w-full h-96 flex flex-col justify-center items-center shadow-lg bg-white rounded-3xl">
        <section className="h-full px-4 py-12 flex flex-col justify-between items-center">
          <h3 className="font-bold text-2xl">{text}</h3>
          {children}
        </section>
      </article>
    )
}