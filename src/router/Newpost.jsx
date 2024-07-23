import { useState } from "react";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";


function Newpost({ newPostHandler}) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function changeHandler(event) {
    setText(event.target.value);
  }
  function changeAuthor(event) {
    setAuthor(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const postData = {
      body : text,
      author: author
    } 
    newPostHandler(postData)
    
  }
  return (
    <Modal>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeHandler} />
        </p>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required onChange={changeAuthor} />
        </p>

        <p className={styles.actions}>
          <Link to={'/'}>Cancel</Link>
          <button onClick={handleSubmit}>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default Newpost;
