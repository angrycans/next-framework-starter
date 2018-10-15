import Link from 'next/link'
import classnames from 'classnames'

import Page from '../components/page';
import styles from './index.less';


export default () => (
  <Page title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <div className={styles.title}>
      test css
    </div>
    <p><Link href='/about'><a>About</a></Link></p>
  </Page >
)
