import React, { useEffect } from 'react';
import styles from './Post.module.css';
import { getPosts } from '../../../../../api/posts';
import { useNavigate } from 'react-router-dom';

interface Post {
  _id: string;
  title: string;
  content: string;
}

function Post() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const navigate = useNavigate();
  const postHandler = (
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
            <div className={styles['post-content__title']} key={post._id} onClick={() => postHandler(post)}>
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
