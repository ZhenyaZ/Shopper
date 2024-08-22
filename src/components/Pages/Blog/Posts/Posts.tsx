import React from 'react'
import PostList from './PostList/PostList'
import styles from './Posts.module.css'
function Posts() {
  return (
    <div className={styles.posts}>
        <PostList/>
    </div>
  )
}

export default Posts