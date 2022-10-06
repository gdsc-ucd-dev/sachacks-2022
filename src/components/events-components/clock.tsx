import { useEffect, useState } from "react";

const Count: React.FC = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("10/15/2022 10:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {partyTime ? (
        <>
          <h1>Hacking Begins!</h1>
          <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video>
        </>
      ) : (
        <>
          <div>
            <div className="flex flex-row lg:pt-24 md:pt-20 sm:pt-16">
              <div className=" flex-column ">
                <span className="mb-10 text-3xl md:text-lg sm:text-sm">
                  Days &nbsp;
                </span>
                <div className="flex flex-row">
                  <span className="text-9xl font-extrabold md:text-8xl sm:text-5xl">
                    {days}
                  </span>
                  <span className="text-9xl md:text-8xl sm:text-5xl">:</span>
                </div>
              </div>
              {/* lg:text-2xl md:text-lg sm:text-sm text-xs mt-10 lg:mt-20  md:mt-16 sm:mt-12 */}

              {/* lg:text-9xl md:text-8xl sm:text-5xl text-5xl font-extrabold mt-4 */}

              <div className="flex-column">
                <span className="mb-10 text-3xl md:text-lg sm:text-sm">
                  Hours &nbsp;
                </span>
                <div className="flex flex-row">
                  <span className="text-9xl font-extrabold md:text-8xl sm:text-5xl">
                    {hours}
                  </span>
                  <span className="text-9xl md:text-8xl sm:text-5xl">:</span>
                </div>
              </div>

              <div className="flex-column">
                <span className="mb-10 text-3xl md:text-lg sm:text-sm">
                  Minutes &nbsp;
                </span>
                <div className="flex flex-row">
                  <span className="text-9xl font-extrabold md:text-8xl sm:text-5xl">
                    {minutes}
                  </span>
                  <span className="text-9xl md:text-8xl sm:text-5xl">:</span>
                </div>
              </div>

              <div className="flex-column">
                <span className="mb-10 text-3xl md:text-lg sm:text-sm">
                  Seconds
                </span>
                <div className="flex flex-row">
                  <span className="text-9xl font-extrabold md:text-8xl sm:text-5xl ">
                    {seconds}
                  </span>
                  <span className="text-9xl md:text-8xl sm:text-5xl"></span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Count;
