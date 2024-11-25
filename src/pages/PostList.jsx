import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { format } from 'date-fns'; 

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postListData = await getDocs(collection(db, "posts"));
            const postsArray = postListData.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt.toDate() 
            }));
            setPosts(postsArray);
        };

        fetchPosts();
    });

    return (
        <div className='w-full flex flex-col items-center p-10'>
           <ul className="flex flex-wrap gap-10 justify-center items-center">
  {posts.length === 0 ? (
    <div>
      <p className='text-white text-3xl'>No posts found.</p>
    </div>
  ) : (
    posts.map(({ id, title, content, createdAt }) => (
      <li key={id}>
        <div className="relative min-h-72 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
          <p className="mb-3">
            {format(createdAt, 'PPPpp')}
          </p>
          <a
            href="#"
            className="inline-flex items-center absolute bottom-5 left-5 px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    ))
  )}
</ul>

        </div>
    );
}
