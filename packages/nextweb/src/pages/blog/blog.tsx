import React from 'react'

import { Page } from '../../components/page'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link href={`/blog/blogdetail?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default class Blog extends React.Component<{}, {}> {

    render() {

        return (
            <Page>
                <h1>My Blog</h1>
                <ul>
                    <PostLink id="1" title="Hello Next.js" />
                    <PostLink id="2" title="Learn Next.js is awesome" />
                    <PostLink id="3" title="Deploy apps with Zeit" />
                </ul>
            </Page>
        )
    }
}