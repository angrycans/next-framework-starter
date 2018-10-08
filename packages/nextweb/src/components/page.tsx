import * as React from 'react'
import { Nav } from './nav'
import { AppFooter } from './footer'
import { Layout, Breadcrumb } from 'antd';
//import test from '../kits/index'

const { Content } = Layout;

export class Page extends React.Component<any, any> {
    // console.log("test", test);

    render() {
        console.log("test", this.props);
        const { children } = this.props
        return (
            <div id="layout">
                {/*language=PostCSS*/}
                <style jsx global>{`//global stylesheet
          #layout {
            background-color: transparent;
          }
        `}
                </style>

                <Layout className="layout">
                    <Nav />

                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Index</Breadcrumb.Item>
                        </Breadcrumb>

                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <main>
                                {children}
                            </main>
                        </div>
                    </Content>

                    <AppFooter />
                </Layout>
            </div>
        )
    }
}
