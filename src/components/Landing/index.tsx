import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import * as SC from './index.module.scss'

const Zoom = require('react-reveal/Zoom')

const Landing: FC = () => (
    <StaticQuery
        query={query}
        render={(data) => (
            <Zoom>
                <section className={SC.top}>
                    <div className={SC.wrapper}>
                        <h1>{`We are ${data.site.siteMetadata.title}`}</h1>
                        <h2>{`Locale: ${data.site.siteMetadata.locale}`}</h2>
                        <p>{data.site.siteMetadata.description}</p>
                    </div>
                </section>
            </Zoom>
        )}
    />
)

export default Landing

const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
                description
                locale
            }
        }
    }
`
