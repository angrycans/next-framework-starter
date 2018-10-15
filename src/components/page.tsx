/*
 * @Author: angrycans 
 * @Date: 2018-10-12 11:07:35 
 * @Last Modified by: angrycans
 * @Last Modified time: 2018-10-12 11:10:39
 */

import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'


import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

type Props = {
  title?: string
}

const Page: React.SFC<Props> = ({ children, title = 'This is the default title' }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    {children}
    <footer>
      I'm here to stay
    </footer>
  </div>
)

export default Page