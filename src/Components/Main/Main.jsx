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

    const [totalTime, setTotalTime] = useState(0);
    const handleClick = readingTime =>{
      setTotalTime(totalTime+readingTime);
    }

    const [bookmarks,setBookmarks]=useState([])
    const handleBookMark = title =>{
      const newArr = [...bookmarks,title]
      setBookmarks(newArr)
    }

  return (
    <div className='flex flex-col md:flex-row justify-between mt-3'>
      <Blogs blogs={blogs} handleClick={handleClick} handleBookMark={handleBookMark}></Blogs>
      <Bookmarks totalTime = {totalTime} bookmarks={bookmarks}></Bookmarks>
    </div>
  )
}

export default Main
