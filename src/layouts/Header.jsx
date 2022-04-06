import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
// const Route = dynamic(() => import("../reusable/Route"));

const Popup = dynamic(() => import("../design/Popup"));
const Modal = dynamic(() => import("../layouts/Modal"));

export default function Header({ scroller }) {
  const [fakeModal, setFakeModal] = useState(false);
  // sidebar useState hook : initial state -> "initial" -> "open" -> "close"
  // 
  const [modalOpen, setModalOpen]  = useState("initial");
  const onModalClick = () => {

    if (modalOpen === "open") {
      setModalOpen("close")
    } else {
      // if (modalOpen === "close" || modalOpen === "initial")
      setModalOpen("open")
    }

    return true;
  };

  useEffect(() => {
    console.log(modalOpen);
  }, []);

  useEffect(() => {
  
    if (!scroller) {
      setModalOpen("close");
    }
  }, [scroller])

  useEffect(()=> {
    if (modalOpen) {
      document.getElementById("main").addEventListener("click", (e) => {
        console.log(e);
        setModalOpen("close");
      })
    }
  }, [modalOpen])


  return (
    <header
      className={
        scroller
          ? "w-full transition-all z-50 fixed top-0 bg-white shadow-md"
          : "w-full z-50 transition-all fixed top-0 bg-transparent shadow-none"
      }
    >
      <section
        className={
          scroller
            ? "w-full max-w-6xl mx-auto transition-all px-8 py-4 flex justify-between md:justify-start items-center space-x-4"
            : "w-full max-w-6xl mx-auto transition-all  py-4 px-8 flex justify-between md:justify-start items-center space-x-4"
        }
      >
        <div className="w-auto flex items-center gap-2">
          <span
            className={
              scroller
                ? "w-6 h-6 bg-mainColor rounded-md animate-spin transition-all"
                : "  transition-all w-8 h-8 bg-mainColor rounded-full"
            }
          ></span>
          <h1 className="font-bold">SacHacks</h1>
        </div>

        {/* desktop version navigation */}
        <nav className="hidden md:flex jusitfy-center items-center gap-4 flex-wrap">
          {/* <Route href={"#home-text"} text={"Home"} className={"text-slate-800 font-semibold"} />
          <Route href={"#home-cards"} text={"About"} className={"text-slate-800 font-semibold"} />
          <Route href={"#home-events"} text={"Events"} className={"text-slate-800 font-semibold"} />
          <Route href={"#home-faq"} text={"FAQ"} className={"text-slate-800 font-semibold"} />
          <Route href={"#"} text={"Sponsors"} className={"text-slate-800 font-semibold"} /> */}
          <a href="#home-text">Home</a>
          <a href="#home-cards">About</a>
          <a href="#home-events">Events</a>
          <a href="#home-faq">FAQ</a>
          <a href="#">Sponsors</a>
        </nav>

        {/* mobile version navigation */}
        <button
          onClick={onModalClick}
          className={
            scroller ? "w-max flex md:hidden flex-col items-center" : "hidden"
          }
        >
          <CgMenuGridR className="text-2xl" />
        </button>
        {/* popup stays on top */}
        <a
          className={
            scroller
              ? "hidden transition-all fixed -top-48 right-8 rounded-b-lg shadow-lg"
              : "flex flex-col md:hidden items-center transition-all fixed top-0 right-8"
          }
          href="https://mlh.io/"
        >
          <Popup className={scroller ? "" : ""} />
        </a>
      </section>

      {/* mobile click modal */}
      <Modal modalOpen={modalOpen} onModalClick={onModalClick}  />


      {/* fake modal */}
      {fakeModal && (
              <aside className="fixed bg-red-400 text-white">
              <h3>Hello World!</h3>
            </aside>
      )}
    </header>
  );
}
