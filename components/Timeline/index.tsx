import React from 'react'
import Post from './Post'
import styles from './timeline.module.css'
import TweetBox from './TweetBox'

function Timeline() {
  return (
    <div className={styles.timeline}>
      {/* Header */}
      <div className={styles.timeline__header}>
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  )
}

export default Timeline
