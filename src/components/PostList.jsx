import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import Newpost from "../router/Newpost";
import Modal from "./Modal";
import styles from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();
  return (
    <>
  
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>There is no post yet!</h2>
          <p>Add one 🙂</p>
        </div>
      )}
    </>
  );
}

export default PostList;
