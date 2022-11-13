// import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import '../assets/scss/main.scss';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
