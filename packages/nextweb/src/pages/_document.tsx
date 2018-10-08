import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'


export default class extends Document {

  render() {
    return (
      <html>
        <Head>
          <title>next.js framework starter</title>
          <meta charSet='utf-8' />
          <meta name="author" content="angrycans@gmail.com" />
          <meta name="description" content="next.js antd" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" />


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

