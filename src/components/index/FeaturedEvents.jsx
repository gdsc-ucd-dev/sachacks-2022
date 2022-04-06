import dynamic from "next/dynamic"

const AirPlain = dynamic(() => import("../../design/Airplain"))
export default function FeaturedEvents () {
    return (
      <section className="w-full">
        <div id="home-events" className="flex flex-col justify-center items-start">
          <section className="w-full max-w-6xl mx-auto pt-16 px-8 relative flex flex-col justify-start items-center space-y-2">
            <div className="w-full">
              <h2 className="text-4xl font-poppins font-bold text-slate-800">Featured Events</h2>
            </div>
          </section>
          <section className="w-full">
          <div className="w-screen md:py-4 lg:py-8 xl:py-16 relative overflow-hidden">
            <AirPlain className={"w-full transform translate-x-full opacity-0 airplain animate-airplaneMove"} />
          </div>
          </section>
      </div>
      </section>
    )
}