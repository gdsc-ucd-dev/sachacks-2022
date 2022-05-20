export default function Main({ scroller, children }) {
  return (
    <main
      id="main"
      className="w-full relative z-10 transition-all flex flex-col items-center overflow-hidden"
    >
      {children}
    </main>
  );
}
