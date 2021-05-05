import React, { FC } from 'react'

type LandingProps = {
    data: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.SiteSiteMetadata, 'title' | 'locale' | 'description'>
    >
}

const Landing: FC<LandingProps> = ({ data }: LandingProps) => (
    <section className="wrapper">
        <div className="section">
            <h1>{`We are ${data?.title}`}</h1>
            <h2>{`Locale: ${data?.locale}`}</h2>
        </div>
    </section>
)

export default Landing
