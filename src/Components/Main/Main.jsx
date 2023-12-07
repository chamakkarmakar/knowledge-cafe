import React, { useEffect, useState } from 'react'
import Blogs from '../Blogs/Blogs'
import Bookmarks from '../Bookmarks/Bookmarks'

const Main = () => {
  const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogsData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, []);

    const handleClick = blog =>{
      console.log(blog.reading_time);
    }

  return (
    <div className='flex flex-col md:flex-row justify-between mt-3'>
      <Blogs blogs={blogs} handleClick={handleClick}></Blogs>
      <Bookmarks></Bookmarks>
    </div>
  )
}

export default Main
