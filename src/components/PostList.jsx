import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import Newpost from "../router/Newpost";
import Modal from "./Modal";
import styles from "./PostList.module.css";

function PostList({ isPosting, handleVisble }) {
  const posts = useLoaderData();


  function newPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((exstingPost) => [postData, ...exstingPost]);
  }
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
