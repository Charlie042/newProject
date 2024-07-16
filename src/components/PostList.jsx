import { useState } from "react";
import Post from "./Post";
import Newpost from "./Newpost";
import Modal from "./Modal";
import styles from "./PostList.module.css";

function PostList({isPosting, handleVisble}) {
  
  return (
    <>
      {isPosting && (
        <Modal onClose={handleVisble}>
          <Newpost onCancel={handleVisble}/>
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author="Charles ginger" body="Love is nothing" />
      </ul>
    </>
  );
}

export default PostList;
