import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link,Form,redirect} from "react-router-dom";


function Newpost() {
 
  return (
    <Modal>
      <Form method='post' className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required name="author" />
        </p>

        <p className={styles.actions}>
          <Link to={'/'}>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function actionHandler ({request}){
   
  const fetchData = await request.formData();
  const postData = Object.fromEntries(fetchData)
  await fetch("http://localhost:8080/posts", {
     method: "POST",
     body: JSON.stringify(postData),
     headers: {
       "Content-Type": "application/json",
     },
   });
    return redirect('/')
}

export default Newpost;
