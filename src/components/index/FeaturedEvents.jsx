import dynamic from 'next/dynamic';

const AirPlain = dynamic(() => import('../../design/Airplain'));
export default function FeaturedEvents() {
  return (
    <section className="w-full">
      <div
        id="home-events"
        className="flex flex-col justify-center items-start"
      >
        <section className="w-full max-w-6xl mx-auto pt-16 px-8 relative flex flex-col justify-start items-center space-y-2">
          <div className="w-full">
            <h2 className="text-4xl font-poppins font-bold text-slate-800">
              Featured Events
            </h2>
          </div>
        </section>
        <section className="w-full">
          <div className="my-4 flex justify-center">
            <a
              href="https://shghl8zzmjq.typeform.com/to/NxJETaGf?typeform-source=admin.typeform.com"
              className="px-3 py-2 border-b-2 border-slate-800 pb-1 text-xl font-medium transition-all hover hover:text-slate-500 hover:border-slate-500"
            >
              Register For The Event
            </a>
          </div>
          <div className="w-screen md:py-4 lg:py-8 xl:py-16 relative overflow-hidden">
            <AirPlain
              className={
                'w-full transform translate-x-full opacity-0 airplain animate-airplaneMove'
              }
            />
          </div>
        </section>
      </div>
    </section>
  );
}
