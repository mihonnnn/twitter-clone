import React, { SetStateAction, useEffect, useState } from 'react'
import Post from './Post'
import styles from './timeline.module.css'
import TweetBox from './TweetBox'
import firestore from '../../firebase'
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import FlipMove from 'react-flip-move'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

interface Posts {
  id: string
  displayName: string
  username: string
  verified: boolean
  text: string
  avatar: string
  image: string
}
function Timeline() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    const postData = collection(firestore, 'posts')
    const q = query(postData, orderBy('timestamp', 'desc'))
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(
    //     querySnapshot.docs.map((doc) => doc.data()) as SetStateAction<Posts[]>,
    //   )
    // })
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => doc.data()) as SetStateAction<Posts[]>,
      )
    })
  }, [])
  // useEffect(() => {
  //   const storage = getStorage()
  //   console.log(storage)
  //   getDownloadURL(ref(storage, 'topimg2.png')).then((url) => {
  //     console.log(url)
  //     setAvatar(url)
  //   })
  // }, [])

  return (
    <div className={styles.timeline}>
      {/* Header */}
      <div className={styles.timeline__header}>
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={''}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Timeline
