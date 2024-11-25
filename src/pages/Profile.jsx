import React from 'react';
import { signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import CreatePost from '../components/CreatePost';
import PostList from './PostList';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove('authToken');
      Swal.fire({
        icon: "success",
        text: "Logout Successfull !",

      });
      navigate('/login');
    } catch (err) {
      console.error('Failed to log out:', err);
    }
  };

  return (
    <div className='relative bg-zinc-900   mt-5'>

      <div className="w-full p-3">
        <h1 className="text-3xl text-center mt-5 text-white">This is the Profile Page</h1>

        <motion.div className='text-center' whileTap={{ scale: 0.8 }}>
          <button onClick={handleLogout} className="btn bg-red-800 rounded-md text-white px-4 py-2">
            Log Out
          </button>
        </motion.div>
        <div id="container" className="py-1 w-auto flex px-24 justify-center relative">
          <div
            id="container"
            className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative"
          >
            <div className="mr-10">
              <img
                className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                src="https://ucarecdn.com/833d0fe1-c3b5-4843-b62c-fed9467aceeb/imageOfMyself.jpeg"
                alt="image of myself"
              />
            </div>
            <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
              <h1 className="text-white font-bold text-3xl mt-6 mb-8">
                Hey it's me, Aydin Vesali Moghaddam
              </h1>
              <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                I'm Aydin, a 18-year-old high schooler with a passion for web
                development. My tech journey started with HTML, CSS, and JavaScript, and
                I was hooked by the thrill of crafting dynamic, interactive websites. As
                I grew, Node.js and ReactJS became my go-to tools for building scalable
                applications. Feel free to connect if you have questions, collaboration
                ideas, or just want to discuss the latest in web development!
              </p>
              <div
                id="social"
                className="flex flex-wrap justify-start items-center gap-4"
              >
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/iam-aydin"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                    width="20px"
                    height="20px"
                    alt="Github"
                  />
                  <span>Visit my Github</span>
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                    width="20px"
                    height="20px"
                    alt="LinkedIn"
                  />
                  <span>Follow me on Linkedin</span>
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://twitter.com/ichbinaydin"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                    width="20px"
                    height="20px"
                    alt="Twitter"
                  />
                  <span>Follow me on Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
      <CreatePost/>
        <h1 className='text-white text-3xl text-center m-5'>Your Posts</h1>
      <PostList/>
    </div>
  );
};

export default Profile;
