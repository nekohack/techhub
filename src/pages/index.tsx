import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Avatar from '../components/Avatar'
import Landing from '../components/Landing'
import GMMarker from '../components/GMMarker'
import Footer from '../components/Footer'
import * as SC from './index.module.scss'

export default class IndexPage extends React.Component<{}> {
    public render() {
        return (
            <Layout>
                <SEO title="nekohack Portal" />
                <div className={SC.container}>
                    <Hero title="Hi, I'm Yuma Kitamura" />
                    <Avatar />
                    <Landing />
                    <GMMarker />
                    <Footer />
                </div>
            </Layout>
        )
    }
}
