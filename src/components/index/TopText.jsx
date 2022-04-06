export default function TopText () {
    return (
      <section className="relative w-full">
                <div id="home-text" className="py-16 max-w-6xl mx-auto px-8 min-h-screen flex flex-col justify-center items-start w-full">
        <section className="w-full flex flex-col justify-center items-start gap-4">
          <h2 className="text-4xl font-bold">SacHacks 2022</h2>
          <h4 className="text-2xl font-semibold">Design. Code. Launch.</h4>
          <p className="w-full max-w-md my-4 font-semibold text-lg leading-loose">
            SacHacks is the first major intercollegiate hackathon in the
            Sacramento, California area. Our passion is to cultivate the
            untapped potential of those in Sac by providing them with the
            opportunity to launch their ideas in a public venue.
          </p>
          <div className="flex items-center gap-4">
            <button className="py-2 px-4 bg-gray-100 shadow-lg rounded-lg text-lg font-semibold">
              Join Team
            </button>
            <button className="py-2 px-4 bg-slate-800 text-white shadow-lg rounded-lg text-lg font-semibold">
              Sponsor Us
            </button>
          </div>
        </section>
      </div>
      </section>
    )
}