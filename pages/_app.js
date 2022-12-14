import '../styles/globals.css'
import '../styles/nprogress.css'
import NProgress from 'nprogress'
import { Router } from 'next/router'

Router.events.on('routeChangeComplete', NProgress.done)
Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeError', NProgress.done)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
