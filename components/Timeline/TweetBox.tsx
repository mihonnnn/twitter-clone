import { Avatar, Button } from '@mui/material'
import React from 'react'
import styles from './tweetBox.module.css'

function TweetBox() {
  return (
    <div className={styles.tweetBox}>
      <form>
        <div className={styles.tweetBox__input}>
          <Avatar />
          <input placeholder="いまどうしてる？" type="text" />
        </div>
        <input
          className={styles.tweetBox__imageInput}
          placeholder="画像のURLを入力してください"
          type="text"
        />
        <Button className={styles.tweetBox__tweetButton} type="submit">
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
