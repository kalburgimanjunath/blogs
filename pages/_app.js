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
        <Script src='http://maps.google.com/maps/api/js' async={false} />
      </Fragment>
    </>
  )
}
