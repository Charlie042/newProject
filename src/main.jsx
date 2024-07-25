import React from "react";
import ReactDOM from "react-dom/client";
import Posts, {loader, loader as loaderHandler} from "./router/Posts";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Newpost, {actionHandler} from "./router/Newpost";
import RootLayout from "./router/RootLayout";
import PostDetails , {loader as postDetailsHandler} from "./components/PostDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: loaderHandler,
        children:
         [{ path: "new-post", element: <Newpost />, action: actionHandler },
          {path: "/:id", element: <PostDetails/>, loader: postDetailsHandler }
         ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
