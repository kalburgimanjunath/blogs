import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import {Helmet} from "react-helmet";
import '../styles/main.css'
import Script from "../hooks/Script";


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
      

      <Fragment>
        {/* Google Map */}
        <div ref={el => this.el = el} className="gmap"></div>

        {/* Old html script */}
        {/*<script type="text/javascript" src="http://maps.google.com/maps/api/js"></script>*/}

        {/* new custom Script component */}
        <div class='embedsocial-album' data-ref="6c9990cf51a1d53f22a93d4527d3f8e932327afb">
          <a class="feed-powered-by-es" href="https://embedsocial.com/facebook-albums/" target="_blank" title="Powered by EmbedSocial">Powered by EmbedSocial<span>→</span></a>
            </div>
        <Script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/ei.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialScript"));</Script>
      </Fragment>
    </>
  )
}
