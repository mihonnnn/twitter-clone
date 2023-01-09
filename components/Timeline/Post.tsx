import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import styles from './post.module.css'

type props = {
  displayName: string
  username: string
  verified: boolean
  text: string
  image: string
  avatar: string
}

// eslint-disable-next-line react/display-name
const Post = forwardRef(
  ({ displayName, username, text, image, avatar }: props, ref: any) => {
    console.log(avatar)
    return (
      <div className={styles.post} ref={ref}>
        <div className={styles.post__avatar}>
          <Avatar src={avatar} />
        </div>
        <div className={styles.post__body}>
          <div className={styles.post__header}>
            <div className={styles.post__headerText}>
              <h3>
                {displayName}
                <span className={styles.post__headerSpecial}>
                  <VerifiedUser className={styles.post__badge} />@{username}
                </span>
              </h3>
            </div>
            <div className={styles.post__headerDescription}>
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className={styles.post__footer}>
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishOutlined fontSize="small" />
          </div>
        </div>
      </div>
    )
  },
)
export default Post
