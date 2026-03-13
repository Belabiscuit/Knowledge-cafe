import { useState } from 'react'

import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Blogs from './assets/Components/Navbar/Blogs/Blogs'

function App() {
   
   const [bookMarked,setBookMarked]=useState([])

  const handlerMark=(blog)=>{
    setBookMarked([...bookMarked,blog])
  }

  return (
    <>
      
    <Navbar></Navbar>
    <div className="main-container flex text-center ">
      <div className="left-container w-[70%]">
      
        <Blogs handlerMark={handlerMark}></Blogs>
      </div>
      <div className="right-container w-[30%]">
        <h1 className='text-3xl'>Bookmarked:</h1>
       {
        bookMarked.map((marked)=><p>{marked.title}</p>)
       }
       
      </div>
    </div>
    </>
  )
}

export default App
