import { useState } from "react";
import Post from "./Post";
import Newpost from "./Newpost";
import Modal from "./Modal";
import styles from "./PostList.module.css";

function PostList() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [isVisble, setIsVisble] = useState(true);

  function changeHandler(event) {
    setText(event.target.value);
  }
  function changeAuthor(event) {
    setAuthor(event.target.value);
  }
  function handleVisble() {
    setIsVisble(!isVisble);
  }
  return (
    <>
      {isVisble && (
        <Modal onClose={handleVisble}>
          <Newpost change={changeHandler} author={changeAuthor} />
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
