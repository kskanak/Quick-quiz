import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Topics from "../components/Topics";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog";
import Errorpage from "../components/Errorpage";
import { topicsLoader } from "../topicsLoader/topicsLoader";
import Quiz from "../components/Quiz";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    element: <Root></Root>,
    loader: topicsLoader,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/topics",

        element: <Topics></Topics>,
      },
      {
        path: "/topics/:id",
        loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz></Quiz>,
      },

      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
