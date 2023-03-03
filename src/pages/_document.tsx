import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/32x32.png" />
        <meta name="description" content="Multi-column Mastodon and Pleroma client for desktop" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
