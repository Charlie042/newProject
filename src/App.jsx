import { useState } from "react";
import PostList from "./components/PostList"
import Newpost from "./components/Newpost";
import MainHeader from "./components/MainHeader";

function App() {
   const [isVisble, setIsVisble] = useState(false);

    function handleVisble() {
      setIsVisble(!isVisble);
    }

  return (
    <>
    <MainHeader onCreatePost={handleVisble}/>
      <main>
        <PostList isPosting={isVisble} handleVisble={handleVisble} />
      </main>
    </>
  );
}

export default App;
