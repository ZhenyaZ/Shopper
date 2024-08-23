import React, { useEffect } from 'react';
import styles from './Post.module.css';
import { getPosts } from '../../../../../api/posts';
import { useNavigate } from 'react-router-dom';
function Post() {
  const [posts, setPosts] = React.useState([]);
  const navigate = useNavigate();
  const postHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    post: { _id: string; title: string; content: string },
  ) => {
    navigate(`/blog/post/${post._id}`, { state: { post } });
  };
  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result);
    });
  }, []);
  return (
    <div className={styles.post}>
      <div className={`${styles['post-content']} container`}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className={styles['post-content__title']} key={post._id} onClick={(e) => postHandler(e, post)}>
              {post.title}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Post;
