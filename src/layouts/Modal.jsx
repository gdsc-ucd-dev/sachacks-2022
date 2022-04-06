import { useEffect, useState } from "react";

const MenuItems = [
    {href: "#home-text", text: "Home"},
    {href: "#home-about", text: "About"},
    {href: "#home-events", text: "Events"},
    {href: "#home-faq", text: "FAQ"},
    {href: "#", text: "Sponsors"},
]

export default function Modal({modalOpen, onModalClick}) {

  return (
    // if it is initial state => no animation nothing (no animation class)
    // else check if open -> animation in else animation
    <aside
        className={
            modalOpen === "open" ? 
            "animate-modalIn opacity-0 transform translate-x-full fixed z-50 top-[56px] right-0 bg-white shadow-2xl bg-opacity-95 w-1/4 min-h-screen"
            : modalOpen === "close" ? "animate-modalOut opacity-100 transform translate-x-0 fixed z-50 top-[56px] right-0 bg-white shadow-2xl bg-opacity-95 w-1/4 min-h-screen"    
            : "opacity-0 transform fixed z-50 top-[56px] right-0 bg-white shadow-2xl bg-opacity-95 w-1/4 min-h-screen"
          }
    >
      <section className="w-full space-y-4 py-4 flex flex-col items-center">
        {MenuItems.map((item, index) => (
             <a onClick={onModalClick} className="px-8" href={item.href} key={index}>{item.text}</a>
        ))}
      </section>
    </aside>
  );
}
