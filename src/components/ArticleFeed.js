import React from 'react'
import {
  FeedWrapper,
  FeedList,
  FeedTitle,
  FeedItem,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemBox,
  FeedItemDate,
  FeedItemDesc,
} from './Feed'

export default ({ results, title, currentId = null, TitleTag = 'h2' }) => {
  const newFeed = results.filter(item => {
    return item.id !== currentId
  })
  const feedItems = newFeed.map((item, index) => {
    const data = item.data
    const title = data.title[0].text
    return (
      <FeedItem key={`articleFeedItem-${index}`}>
        <FeedItemLink to={`/writing/${item.uid}`}>
          <FeedItemBox>
            {data.title.length && (
              <FeedItemLinkTitle>{title}</FeedItemLinkTitle>
            )}
            {data.date && <FeedItemDate>{data.date}</FeedItemDate>}
          </FeedItemBox>
          {data.subtitle.length && (
            <FeedItemDesc>{data.subtitle[0].text}</FeedItemDesc>
          )}
        </FeedItemLink>
      </FeedItem>
    )
  })

  return (
    <FeedWrapper>
      <FeedTitle id={encodeURI(title)}>{title}</FeedTitle>
      <FeedList>{feedItems}</FeedList>
    </FeedWrapper>
  )
}
