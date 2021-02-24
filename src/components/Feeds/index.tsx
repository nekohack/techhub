import React, { FC } from 'react'
import * as SC from './index.module.scss'
import dayjs from 'dayjs'

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
        <section className={SC.top}>
            <div className={SC.wrapper}>
                <h1>Feeds</h1>
                <div className={SC.feeds}>
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
            </div>
        </section>
    )
}

export default Feeds
