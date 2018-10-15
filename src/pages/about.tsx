import Link from 'next/link'
import classnames from 'classnames'

import Page from '../components/page';

import css from './about.less'

export default () => (
  <Page title="About | Next.js + TypeScript Example">
    <div className={css.bg}>
      <p>This is the about page2</p>
      <p><Link href='/'><a>Go home</a></Link></p>
    </div>
  </Page>
)