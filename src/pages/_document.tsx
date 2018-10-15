import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'


// Document component is strongly typed with `@types/next`
export default class MyDocument extends Document {
  render() {
    const { buildManifest } = (this as any).props;
    const { css } = buildManifest;
    console.log("css", (this as any).props);
    return (
      <html>
        <Head>
          {/* <title>Next.js TypeScript Example</title> */}
          <link rel="stylesheet" href="/static/css/antd/3.10.0/antd.min.css" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}