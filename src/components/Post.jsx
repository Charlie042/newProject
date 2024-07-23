import styles from './Post.module.css'

function Post({author,body}) {
  return (
    <ul className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.body}>{body}</p>
    </ul>
  );
}

export default Post;
