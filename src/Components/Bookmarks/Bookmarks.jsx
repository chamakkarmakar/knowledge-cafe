import React from 'react'

const Bookmarks = ({totalTime}) => {
  return (
    <div>
      <div className='border rounded-md p-5 bg-neutral-700'>
        <p>Spent time on read : {totalTime} minutes</p>
      </div>
      <div className='border rounded-md mt-5 p-4 text-center bg-neutral-700'>
        <h3>Bookmarked Blogs : B</h3>

      </div>
    </div>
  )
}

export default Bookmarks
