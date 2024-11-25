import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "posts"), {
                title,
                content,
                createdAt: new Date()
            });
            setTitle('');
            setContent('');
            toast.success('Post created successfully!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                theme: "dark",
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className='w-full flex flex-col justify-center items-center p-10'>
            <ToastContainer />
            <h1 className='text-center text-4xl text-white'>Create Post</h1>
            <form onSubmit={handleSubmit} className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 sm:p-6 md:p-10 bg-white mt-3 rounded-lg'>
                <div>
                    <input
                        className='w-full border py-2 px-3 border-black outline-indigo-500 rounded-md'
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        className='w-full mt-4 border py-2 px-3 border-black outline-indigo-500 rounded-md'
                        placeholder="Content"
                        rows="4"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className='text-center mt-4'>
                    <button className='  btn bg-indigo-600 hover:bg-indigo-900 transition-colors px-8 py-2 md:py-2 rounded-md text-white' type="submit">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
}
