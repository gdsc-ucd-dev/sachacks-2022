import "../styles/globals.css"
import dynamic from 'next/dynamic'
const GlobalLayout = dynamic(() => import("../src/layouts/Layout"));

function MyApp({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}

export default MyApp


