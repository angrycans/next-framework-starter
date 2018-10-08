import React from 'react'
import Link from 'next/link'

import classnames from 'classnames'

import css from '../css/styles.css'

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export class Nav extends React.Component<{}, {}> {
    render() {
        return (
            <Header>
                <div className={classnames('test', css.logo)} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href="/blog/blog">
                            <a>blog</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}