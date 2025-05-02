import Head from "next/head"
import type { AppProps } from "next/app"

import { useEffect } from "react"
import { useRouter } from "next/router"

import "styles/main.scss"
import Script from "next/script"

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
      </Head>

      {/* https://nextjs.org/docs/basic-features/script */}
      {/* Piwik Pro */}
      <Script
        id="piwikPro"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(window, document, dataLayerName, id) {
            window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
            function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
            var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
            var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
            tags.async=!0,tags.src="https://oslovegetarfestival.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
            !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
            })(window, document, 'dataLayer', 'd5d3a6f1-f408-40b5-ba3b-d2a7f4bc7400');
          `,
        }}
      />

      {/* Google Tag Manager */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11138954316" />
      <Script
        id="googleTagManager"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11138954316');
          `,
        }}
      />

      {/* Facebook tracking */}
      <Script
        id="meta"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '478499720966332');
          fbq('track', 'PageView');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
