import { createBrowserRouter } from "react-router-dom";
import Main from "./../layout/Main";
import Home from "./../components/Home";
import SingleCourseDetail from "../components/SingleCourseDetail";
import Category from "../components/Category";
import Faq from "../components/Faq";
import Blog from "../components/Blog";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import CheckOut from "../components/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-server-khaki-theta.vercel.app/news"),
      },

      {
        path: "/news/:id",
        element: <SingleCourseDetail></SingleCourseDetail>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-khaki-theta.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-khaki-theta.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-khaki-theta.vercel.app/news/${params.id}/`
          ),
      },

      {
        path: "/questions",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
