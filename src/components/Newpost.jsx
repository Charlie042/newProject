import { useState } from "react";
import styles from "./NewPost.module.css";


function Newpost(props) {
  return (
    <>
      <form className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={props.change} />
        </p>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required onChange={props.author} />
        </p>
      </form>
    </>
  );
}

export default Newpost;
