import React from 'react';
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({blog,handlerMark}) => {
   
    return (
        <div className='py-5'>
           <div className="card bg-base-100 w-96 shadow-sm border-2 border-amber-50 p-4">
  <figure>
    <img
      src={blog.coverPhoto}
      alt="Shoes" />
  </figure>
   <div className='author-details flex justify-around items-center gap-3 py-3'>
      <p className='pl-6'>{blog.author}</p>
      <img className='w-16 rounded-full' src={blog.authorImage} alt="" />
       <button onClick={()=>handlerMark(blog)}><IoBookmarkSharp size={25}/> </button>  
   </div>
   


  <div className="card-body text-center">
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className='flex justify-center items-center'>
      {
       blog.hashtags.map((has)=> <p>{has}</p>)
      }
    </div>
    
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;