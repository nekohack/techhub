import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Home'
import GMMarker from '../components/GMMarker'
import Footer from '../components/Footer'

export default class IndexPage extends React.Component<{}> {
    public render() {
        return (
            <Layout>
                <SEO title="nekohack Tech Hub" />
                <Home />
                <GMMarker />
                <Footer />
            </Layout>
        )
    }
}
