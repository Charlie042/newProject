import styles from './Post.module.css'
import { Link } from 'react-router-dom';

function Post({id,author,body}) {
  return (
    <Link to={id}>
      <ul className={styles.post}>
        <p className={styles.author}>{author}</p>
        <p className={styles.body}>{body}</p>
      </ul>
    </Link>
  );
}

export default Post;
