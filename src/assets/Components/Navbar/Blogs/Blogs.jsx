import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Blogs = ({handlerMark}) => {

   const [blogs,setBlogs]=useState([]) 
   
    useEffect(()=>{
        fetch("Blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])

    return (
        <div>
            <h1 className='text-3xl'>Available:{blogs.length}</h1>
           <div className="all-blogs grid grid-cols-2 ">
            {
                blogs.map((blog)=><Blog blog={blog} handlerMark={handlerMark}></Blog>)
            }
           </div>
        </div>
    );
};

export default Blogs;