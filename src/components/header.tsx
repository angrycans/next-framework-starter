import Link from 'next/link';

import classnames from 'classnames'
import css from './header.less'


const linkStyle = {
    margin: 15,

}

const Header = () => (
    <div className={classnames('test', css.bg)}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/clock/clock">
            <a style={linkStyle}>clock</a>
        </Link>
    </div>
)

export default Header;