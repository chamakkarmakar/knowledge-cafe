import React from 'react'

const Bookmarks = ({ totalTime, bookmarks }) => {
  return (
    <div  className='md:fixed md:top-24 md:right-32 mx-auto w-96 mb-20'>
      <div className='border rounded-md p-5 bg-neutral-700'>
        <p>Spent time on read : {totalTime} minutes</p>
      </div>
      <div className='border rounded-md mt-5 p-4 text-center bg-neutral-700'>
        <h3>Bookmarked Blogs : B</h3>
        {
          bookmarks.map((mark,index) =>
            <div key={index} className="bg-slate-900 border m-3">
              <p className='p-3'>{mark}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Bookmarks
