import { Search } from '@mui/icons-material'
import React from 'react'
import styles from './widget.module.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'

function Widget() {
  return (
    <div className={styles.widget}>
      <div className={styles.widget__input}>
        <Search className={styles.widget__searchIcon} />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className={styles.widget__widgetContainer}>
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追記 */}
        <TwitterTweetEmbed tweetId={'1609746853960241157'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="HotamMi"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://twitter.com/HotamMi'}
          options={{
            text:
              '【テスト投稿】Next.js勉強中、Twitterクローンアプリから送信しています。#Next #React',
            via: 'HotamMi',
          }}
        />
      </div>
    </div>
  )
}

export default Widget
