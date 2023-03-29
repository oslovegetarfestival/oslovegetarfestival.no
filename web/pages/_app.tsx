import Head from "next/head"
import type { AppProps } from "next/app"

import { useEffect } from "react"
import { useRouter } from "next/router"

import "styles/main.scss"

// Allow smooth scroll in-page, but disable on page navigation
export function useSmoothScroll() {
  const router = useRouter()

  const setSmoothScroll = (isSmooth: boolean) => {
    document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto"
  }

  useEffect(() => {
    setSmoothScroll(true)
    const handleStart = () => setSmoothScroll(false)
    const handleStop = () => setSmoothScroll(true)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router.events])
}

function MyApp({ Component, pageProps }: AppProps) {
  useSmoothScroll()

  return (
    // TODO: Update favicon + colors
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
