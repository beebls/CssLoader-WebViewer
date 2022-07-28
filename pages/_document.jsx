import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' type='image/x-conl' href='/fav.ico' />

        <title>CssLoader - Theme Browser</title>
        <meta name='title' content='CssLoader - Theme Browser' />
        <meta
          name='description'
          content='Browse CssLoader themes on any device that has a web browser'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://cssloader.beebl.es/' />
        <meta property='og:title' content='CssLoader - Theme Browser' />
        <meta
          property='og:description'
          content='Browse CssLoader themes on any device that has a web browser'
        />
        <meta
          property='og:image'
          content='https://cssloader.beebl.es/meta.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://cssloader.beebl.es/' />
        <meta property='twitter:title' content='CssLoader - Theme Browser' />
        <meta
          property='twitter:description'
          content='Browse CssLoader themes on any device that has a web browser'
        />
        <meta
          property='twitter:image'
          content='https://cssloader.beebl.es/meta.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
