export default function Main ({scroller, children}) {
    return (
        <main id="main" className="w-full transition-all flex flex-col items-center min-h-screen">
            {children}
        </main>
    )
}