import fs from 'fs-extra'
import Parser from 'rss-parser'

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
    allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds)
    fs.writeJsonSync('src/contents/feeds.json', allPostItems)
})()
