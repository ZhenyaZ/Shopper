import styles from './DetailedPost.module.css';
import { useLocation } from 'react-router-dom';
import parser from 'html-react-parser';
function DetailedPost() {
  const location = useLocation();

  return (
    <div className={styles.detailedPost}>
      <div className={`${styles['detailedPost-content']} container`}>
        <div className={styles['detailedPost__title']}>{location.state.post.title}</div>
        <div className={styles['detailedPost__content']}>{parser(location.state.post.content)}</div>
      </div>
    </div>
  );
}

export default DetailedPost;
