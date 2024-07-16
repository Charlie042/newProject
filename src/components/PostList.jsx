import { useState } from "react";
import Post from "./Post";
import Newpost from "./Newpost";
import Modal from "./Modal";
import styles from "./PostList.module.css";

function PostList({isPosting, handleVisble}) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function changeHandler(event) {
    setText(event.target.value);
  }
  function changeAuthor(event) {
    setAuthor(event.target.value);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={handleVisble}>
          <Newpost change={changeHandler} author={changeAuthor} cancel={handleVisble}/>
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={author} body={text} />
        <Post author="Charles ginger" body="Love is nothing" />
      </ul>
    </>
  );
}

export default PostList;
