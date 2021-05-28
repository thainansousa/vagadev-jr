import { BagContextProvider } from '../Context/BagContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <BagContextProvider>
      <Component {...pageProps} />
    </BagContextProvider>
  )
}

export default MyApp
