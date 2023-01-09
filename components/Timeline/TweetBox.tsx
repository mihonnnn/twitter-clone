import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import styles from './tweetBox.module.css'
import firestore from '../../firebase'
import { collection, setDoc, doc, serverTimestamp } from 'firebase/firestore'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = async (e: any) => {
    e.preventDefault()
    const postsCollection = collection(firestore, 'posts')
    const postsDoc = doc(postsCollection)
    //firestoreの中のドキュメント（itemsのなかにいるやつ）
    const id = postsDoc.id
    await setDoc(postsDoc, {
      id: id,
      displayName: 'みほ',
      username: 'HotamMi',
      verified: true,
      text: tweetMessage,
      avatar: '',
      image: tweetImage,
      timestamp: serverTimestamp(),
    })
    setTweetImage('')
    setTweetMessage('')
  }
  return (
    <div className={styles.tweetBox}>
      <form>
        <div className={styles.tweetBox__input}>
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className={styles.tweetBox__imageInput}
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className={styles.tweetBox__tweetButton}
          type="submit"
          onClick={(e) => sendTweet(e)}
        >
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
