import React from 'react'
import Post from '../components/Post'




export default function Homepage() {

  return (
    <>
    
    <div className='relative  items-center justify-center min-h-screen  mt-5 pt-5 pb-5'>
      <h1 className='text-3xl  text-center text-grey-900 mt-5 mb-10 page_title'>Welcome To Feed page.</h1>
      <Post/>
    </div>
    </>
  )
}
