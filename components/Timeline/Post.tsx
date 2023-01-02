import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import styles from './post.module.css'

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.post__avatar}>
        <Avatar />
      </div>
      <div className={styles.post__body}>
        <div className={styles.post__header}>
          <div className={styles.post__headerText}>
            <h3>
              プログラミングチュートリアル
              <span className={styles.post__headerSpecial}>
                <VerifiedUser className={styles.post__badge} />
                @HotamMi
              </span>
            </h3>
          </div>
          <div className={styles.post__headerDescription}>
            <p>Reactなう。</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" alt="" />
        <div className={styles.post__footer}>
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Post
