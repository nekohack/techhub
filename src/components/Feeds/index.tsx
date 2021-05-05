import React, { FC } from 'react'
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
        <section className="wrapper">
            <div className="section">
                <h1>Feeds</h1>
                <div className="feeds">
                    {filters.map((filter, index) => {
                        return (
                            <a
                                key={index}
                                href={filter.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="feed-card"
                            >
                                <span className="reaction-img">
                                    {filter.author.slice(0, 1)}
                                </span>
                                <div>
                                    <div className="title">
                                        {filter.title}
                                    </div>
                                    <div className="date">
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
