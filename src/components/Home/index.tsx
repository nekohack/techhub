import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import feeds from '../../contents/feeds.json'
import Avatar from '../Avatar'
import Landing from '../Landing'
import Products from '../Products'
import Feeds from '../Feeds'
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
            blogImage: file(relativePath: { eq: "icons/webneko-blog.png" }) {
                childImageSharp {
                    fixed(width: 120, height: 120) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            performanceImage: file(
                relativePath: { eq: "icons/performance.png" }
            ) {
                childImageSharp {
                    fixed(width: 120, height: 120) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            routineImage: file(relativePath: { eq: "icons/routine.png" }) {
                childImageSharp {
                    fixed(width: 120, height: 120) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            allSitesYaml {
                edges {
                    node {
                        id
                        name
                        imageName
                        url
                        type
                    }
                }
            }
        }
    `)

    return (
        <>
            <Avatar />
            <Landing data={data?.site?.siteMetadata} />
            <Products
                blogImage={data?.blogImage}
                performanceImage={data?.performanceImage}
                routineImage={data?.routineImage}
                data={data?.allSitesYaml.edges}
            />
            <Feeds data={feeds} />
            <GMMarker />
            <Footer />
        </>
    )
}

export default Home
