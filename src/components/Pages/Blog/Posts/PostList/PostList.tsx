import React from 'react';
import Post from '../Post/Post';
import styles from './PostList.module.css';
function PostList() {
  return (
    <div className={styles.postList}>
      <div className={`${styles['postList-content']}`}>
        <Post />
      </div>
    </div>
  );
}

export default PostList;
