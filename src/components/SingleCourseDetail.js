import React from "react";
import { useLoaderData } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const SingleCourseDetail = () => {
  const news = useLoaderData();
  const { title, details, image_url, _id } = news;
  return (
    <div className="m-4">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <svg
          className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clip-rule="evenodd"
          ></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <Card className="h-64" imgSrc={image_url}></Card>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {details}
        </p>
        <Link to={`/checkout/${_id}`}>
          <Button gradientDuoTone="tealToLime">Get Premium Access</Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCourseDetail;
