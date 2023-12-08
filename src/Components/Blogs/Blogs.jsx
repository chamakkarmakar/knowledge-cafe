import React, { useEffect, useState } from 'react'

const Blogs = ({blogs,handleClick,handleBookMark}) => {
    
    return (
        <div className=''>
            {
                blogs.map(blog =>
                    <div key={blog.id} className="w-4/5 mx-auto md:mx-0 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-7">
                            <img className="mx-auto rounded-t-lg" src={blog.cover} alt="" />
                        <div className="flex justify-between items-center my-3">
                            <div className="flex">
                                <img className='w-14 h-14 mx-3' src={blog.author_img} alt="" />
                                <div className='text-zinc-900'>
                                    <h3>{blog.author}</h3>
                                    <p>{blog.posted_date}</p>
                                </div>
                            </div>
                            <div className="flex text-gray-800 me-3">
                                <p>{blog.reading_time} min read</p>
                                <button onClick={()=>handleBookMark(blog.title)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="px-5">
                            
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                           
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <span>#{blog.hashtags[0]}</span> <span>#{blog.hashtags[1]}</span>
                            </p>
                            <button onClick={()=>handleClick(blog.reading_time)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Mark as read
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Blogs
