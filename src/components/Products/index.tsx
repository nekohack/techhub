import React, { FC } from 'react'
import Img from 'gatsby-image'
import * as SC from './index.module.scss'

const Zoom = require('react-reveal/Zoom')

type ProductsProps = {
    blogImage: GatsbyTypes.Maybe<{
        childImageSharp: GatsbyTypes.Maybe<{
            fixed?: GatsbyTypes.Maybe<
                Pick<
                    GatsbyTypes.ImageSharpFixed,
                    'base64' | 'width' | 'height' | 'src' | 'srcSet'
                >
            >
        }>
    }>
    performanceImage: GatsbyTypes.Maybe<{
        childImageSharp: GatsbyTypes.Maybe<{
            fixed?: GatsbyTypes.Maybe<
                Pick<
                    GatsbyTypes.ImageSharpFixed,
                    'base64' | 'width' | 'height' | 'src' | 'srcSet'
                >
            >
        }>
    }>
    routineImage: GatsbyTypes.Maybe<{
        childImageSharp: GatsbyTypes.Maybe<{
            fixed?: GatsbyTypes.Maybe<
                Pick<
                    GatsbyTypes.ImageSharpFixed,
                    'base64' | 'width' | 'height' | 'src' | 'srcSet'
                >
            >
        }>
    }>
    data: Array<{
        node: Pick<
            GatsbyTypes.SitesYaml,
            'id' | 'name' | 'imageName' | 'url' | 'type'
        >
    }>
}

const Products: FC<ProductsProps> = ({
    blogImage,
    performanceImage,
    routineImage,
    data,
}) => {
    return (
        <Zoom>
            <section className={SC.wrapper}>
                {data.map((node: any, index: number) => {
                    const name = data[index].node.name
                    const imageName = data[index].node.imageName
                    const url = data[index].node.url
                    return (
                        <div key={index} className={SC.productCard}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {imageName === 'blog' && (
                                    <Img
                                        fixed={
                                            blogImage?.childImageSharp?.fixed!
                                        }
                                        alt={imageName}
                                    />
                                )}
                                {imageName === 'performance' && (
                                    <Img
                                        fixed={
                                            performanceImage?.childImageSharp
                                                ?.fixed!
                                        }
                                        alt={imageName}
                                    />
                                )}
                                {imageName === 'routine' && (
                                    <Img
                                        fixed={
                                            routineImage?.childImageSharp
                                                ?.fixed!
                                        }
                                        alt={imageName}
                                    />
                                )}
                                <h2>{name}</h2>
                            </a>
                        </div>
                    )
                })}
            </section>
        </Zoom>
    )
}

export default Products
