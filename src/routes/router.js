import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Topics from "../components/Topics";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog";
import Errorpage from "../components/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/topics", element: <Topics></Topics> },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
