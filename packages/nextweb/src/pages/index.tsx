import React from 'react'
import { Home } from '../components/home/home'
import { Page } from '../components/page'



export default class Index extends React.Component {
    render() {
        
        return (
            <Page>
                <Home />
            </Page>
        )
    }
}