import fs from 'fs-extra'
import Parser from 'rss-parser'

import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

import { members } from '../contents/members'

type Member = {
    name: string
    role?: string
    biography?: string
    sources?: string[]
    githubUsername?: string
    twitterUsername?: string
    websiteUrl?: string
}

type PostItem = {
    authorName: string
    title: string
    link: string
    contentSnippet?: string
    isoDate?: string
    dateMiliSeconds: number
}

type FeedItem = {
    title: string
    link: string
    contentSnippet: string
    isoDate: string
    pubDate: string
    dateMiliSeconds: number
}

const parser = new Parser()
let allPostItems: PostItem[] = []

async function fetchFeedItems(url: string) {
    const feed = await parser.parseURL(url)
    if (!feed?.items?.length) return []

    return feed.items
        .map(({ title, contentSnippet, link, isoDate, pubDate }) => {
            return {
                title,
                contentSnippet: contentSnippet?.replace(/\n/g, ''),
                link,
                pubDate,
                // dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
            }
        })
        .filter(({ title }) => title) as FeedItem[]
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
    if (!sources?.length) return []

    let feedItems: FeedItem[] = []
    for (const url of sources) {
        const items = await fetchFeedItems(url)
        if (items) feedItems = [...feedItems, ...items]
    }
    return feedItems
}

async function getMemberFeedItems(member: Member): Promise<PostItem[]> {
    const { sources, name } = member

    const feedItems = await getFeedItemsFromSources(sources)
    if (!feedItems) return []

    return feedItems.map((item) => {
        return {
            ...item,
            authorName: name,
        }
    })
}

;(async function () {
    for (const member of members) {
        const items = await getMemberFeedItems(member)
        if (items) allPostItems = [...allPostItems, ...items]
    }
    fs.writeJsonSync(
        'src/contents/feeds.json',
        allPostItems.sort((a: any, b: any) => {
            if (dayjs(a.pubDate).isAfter(dayjs(b.pubDate))) return -1
            if (dayjs(a.pubDate).isBefore(dayjs(b.pubDate))) return 1
            return 0
        })
    )
})()
