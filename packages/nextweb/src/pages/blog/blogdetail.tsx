import React from 'react'

import { Page } from '../../components/page'


// export default (props) => (
//     <Page>
//         <Content url={props.url} />
//     </Page>
// )
export default class BlogDetail extends React.Component<any, any> {

    render() {
        console.log(this.props)
        return (
            <Page>
                <h1>{this.props.url.query.title}</h1>
                <p>This is the blog post content.</p>
            </Page>
        )
    }
}
