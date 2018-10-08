import React from 'react'
import { About } from '../components/about/about'
import { Page } from '../components/page'

export default class AboutUs extends React.Component {
    render() {
        return (
            <Page>
                <About />
            </Page>
        )
    }
}