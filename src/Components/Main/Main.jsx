import React, { useEffect, useState } from 'react'
import Blogs from '../Blogs/Blogs'
import Bookmarks from '../Bookmarks/Bookmarks'
import Toast from '../Toast/Toast';

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogsData.json')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
      })
  }, []);

  const [totalTime, setTotalTime] = useState(0);
  const handleClick = readingTime => {
    setTotalTime(totalTime + readingTime);
  }

  const [showToast, setShowToast] = useState(false);
  const [bookmarks, setBookmarks] = useState([])
  const handleBookMark = title => {

    if (bookmarks.includes(title)) {
      console.log("toast");
      setShowToast(true);
    } else {
      setBookmarks([...bookmarks, title])
    }
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  }

  return (
    <div className='flex flex-col md:flex-row justify-between mt-3 relative'>
      <Blogs blogs={blogs} handleClick={handleClick} handleBookMark={handleBookMark}></Blogs>
      <Bookmarks totalTime={totalTime} bookmarks={bookmarks} ></Bookmarks>
      {showToast && <Toast message="You have already Bookmarked this blog" />}
    </div>
  )
}

export default Main
