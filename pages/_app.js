import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import {Helmet} from "react-helmet";
import '../styles/main.css'
import { useEffect } from 'react'

export function htmlDecode(html) {
    return html.replace(/&([a-z]+);/ig, (match, entity) => {
      const entities = { amp: '&', apos: '\'', gt: '>', lt: '<', nbsp: '\xa0', quot: '"' };
      entity = entity.toLowerCase();
      if (entities.hasOwnProperty(entity)) {
        return entities[entity];
      }
      return match;
    });
  }

export default function Nextra({ Component, pageProps }) {
  const scriptCode = `<script type="text/javascript">
          {(function() {
          window.hello={
            FIRST_NAME: 'firstName',
            LAST_NAME: 'lastName',
          };
          })()}
          </script>`
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
    </>
  )
}
