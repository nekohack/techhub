import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Hero from '../Hero'
import Avatar from '../Avatar'
import Landing from '../Landing'
import GMMarker from '../GMMarker'
import Footer from '../Footer'

const Home: FC = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    locale
                }
            }
        }
    `)

    return (
        <>
            <Hero title="Hi, I'm Yuma Kitamura" />
            <Avatar />
            <Landing data={data?.site?.siteMetadata} />
            <GMMarker />
            <Footer />
        </>
    )
}

export default Home
