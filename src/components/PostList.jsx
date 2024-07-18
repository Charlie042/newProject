import { useState, useEffect } from "react";
import Post from "./Post";
import Newpost from "./Newpost";
import Modal from "./Modal";
import styles from "./PostList.module.css";

function PostList({isPosting, handleVisble}) {
  
  const [posts, setPosts] = useState([])
  
  useEffect(()=> {
    async function fetchHandler (){
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json();
      setPosts(resData.posts);
    };
    fetchHandler();
  }, [])

  function newPostHandler (postData){
  fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    setPosts((exstingPost)=> [postData, ...exstingPost] )
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={handleVisble}>
          <Newpost onCancel={handleVisble} newPostHandler={newPostHandler} />
        </Modal>
      )}
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
