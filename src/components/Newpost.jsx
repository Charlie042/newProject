import { useState } from "react";
import styles from "./NewPost.module.css";


function Newpost({change,author,cancel}) {
  return (
  
      <form className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={change} />
        </p>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required onChange={author} />
        </p>

        <p className = {styles.actions}>
          <button onClick={cancel}>Cancel</button>
          <button>Submit</button>
        </p>
      </form>
    
  );
}

export default Newpost;
