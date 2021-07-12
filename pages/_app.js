import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
export const Box = () => (
  `<div>
  <div class='embedsocial-album' data-ref="6c9990cf51a1d53f22a93d4527d3f8e932327afb">
    <a class="feed-powered-by-es" href="https://embedsocial.com/facebook-albums/" target="_blank" title="Powered by EmbedSocial">
      </a>
  </div>
  <script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/ei.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialScript"));</script>
  </div>`
  );
export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      <Box/>
    </>
  )
}
