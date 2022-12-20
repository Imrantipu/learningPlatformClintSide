import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from './../components/Home';
import SingleCourseDetail from "../components/SingleCourseDetail";
import Category from "../components/Category";
import Faq from "../components/Faq";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () =>
              fetch(
                "http://localhost:5000/news"
              ),

        },

        {
            path: "/news/:id",
            element: <SingleCourseDetail></SingleCourseDetail>,
            loader: ({ params }) =>
              fetch(
                `http://localhost:5000/news/${params.id}`
              ),
          },
          {
            path: "/category/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(
                `https://b610-lerning-platform-server-side-opuzayed.vercel.app/category/${params.id}`
              ),
          },

          {
            path: "/questions",
            element: <Faq></Faq>,
          },
          
      ],
    },
  ]);