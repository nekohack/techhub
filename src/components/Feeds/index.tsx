import React, { FC } from 'react'
import * as SC from './index.module.scss'
import dayjs from 'dayjs'

const Zoom = require('react-reveal/Zoom')

type FeedsProps = {
    data:
        | Array<{
              title: string
              contentSnippet: string
              link: string
              pubDate: string
              author: string
          }>
        | any
}

const Feeds: FC<FeedsProps> = ({ data }) => {
    let filters = []
    for (let index = 0; index < data.length; index++) {
        if (index < 10) {
            filters.push(data[index])
        }
    }

    const dateFormat = (d: string) => {
        return dayjs(d).format('YYYY/MM/DD HH:mm')
    }

    return (
        <Zoom>
            <section className={SC.wrapper}>
                <div className={SC.feedWrapper}>
                    {filters.map((filter, index) => {
                        return (
                            <a
                                key={index}
                                href={filter.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={SC.feedCard}
                            >
                                <span className={SC.reactionImg}>
                                    {filter.author.slice(0, 1)}
                                </span>
                                <div>
                                    <div className={SC.title}>
                                        {filter.title}
                                    </div>
                                    <div className={SC.date}>
                                        {dateFormat(filter.pubDate)}
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </section>
        </Zoom>
    )
}

export default Feeds
