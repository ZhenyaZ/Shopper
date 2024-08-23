import React from 'react';
import style from './Blog.module.css';
import Posts from './Posts/Posts';
function Blog() {
  return (
    <div className={style.blog}>
      <div className={`${style['blog-content']} container`}>
        <div className={style['blog-content__title']}>
          <h1>Blog</h1>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default Blog;
