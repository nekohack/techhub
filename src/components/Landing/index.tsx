import React, { FC } from 'react'

type LandingProps = {
    data: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.SiteSiteMetadata, 'title' | 'locale' | 'description'>
    >
}

const Landing: FC<LandingProps> = ({ data }: LandingProps) => (
    <div className="section">
        <h1>{data?.title}</h1>
        <h2>{`Locale: ${data?.locale}`}</h2>
    </div>
)

export default Landing
