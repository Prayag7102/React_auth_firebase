import React, { useEffect, useState } from "react";
import { postData } from "../api/postDataApi";

export default function Post() {
  const [postdata, setpostData] = useState([]);
  const getPostData = async () => {
    const post = await postData();

    const data = post.data;
    setpostData(data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="post_container">
      <ul className="flex flex-wrap gap-10 justify-center items-center">
        {postdata.map((elem) => {
          const { id, title, body } = elem;
          return (
            <li key={id}>
              <div className="min-h-72 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                 {body}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
