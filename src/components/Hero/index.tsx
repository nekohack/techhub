import React from 'react'
import * as SC from './index.module.scss'

const Hero = ({ title }: { title: string }) => (
    <div className={SC.heroContainer}>
        <div className={SC.titleContainer}>
            <div className={SC.heroTitle}>{title}</div>
        </div>
    </div>
)

export default Hero
