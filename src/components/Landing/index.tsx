import React, { FC } from 'react'
import * as SC from './index.module.scss'

type LandingProps = {
    data: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.SiteSiteMetadata, 'title' | 'locale' | 'description'>
    >
}

const Landing: FC<LandingProps> = ({ data }: LandingProps) => (
    <section className={SC.top}>
        <div className={SC.wrapper}>
            <h1>{`We are ${data?.title}`}</h1>
            <h2>{`Locale: ${data?.locale}`}</h2>
        </div>
    </section>
)

export default Landing
