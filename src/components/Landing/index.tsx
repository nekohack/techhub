import React, { FC } from 'react'
import * as SC from './index.module.scss'
import { SiteMetadataTypes } from '../../types'

const Zoom = require('react-reveal/Zoom')

const Landing: FC<SiteMetadataTypes> = ({ data }) => (
    <Zoom>
        <section className={SC.top}>
            <div className={SC.wrapper}>
                <h1>{`We are ${data.title}`}</h1>
                <h2>{`Locale: ${data.locale}`}</h2>
                <p>{data.description}</p>
            </div>
        </section>
    </Zoom>
)

export default Landing
