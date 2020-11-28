import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as SC from './index.module.scss'

const Avatar = () => (
    <StaticQuery
        query={query}
        render={(data) => (
            <div className={SC.content}>
                <div className={SC.avatar}>
                    <Img fixed={data.file.childImageSharp.fixed} />
                </div>
            </div>
        )}
    />
)

export default Avatar

const query = graphql`
    query {
        file(relativePath: { eq: "icons/nekohack-512.png" }) {
            childImageSharp {
                fixed(width: 160) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
