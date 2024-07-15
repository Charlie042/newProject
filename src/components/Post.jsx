import styles from './Post.module.css'

function Post(props) {
  return (
    <ul className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.body}>{props.body}</p>
    </ul>
  );
}

export default Post;
