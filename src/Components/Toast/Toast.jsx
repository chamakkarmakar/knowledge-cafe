import React from 'react'

const Toast = ({ message }) => {
  return (
    <div className="fixed top-0 right-auto bg-slate-200 text-amber-500 px-5 py-8 rounded-md">
      {message}
    </div>
  )
}

export default Toast
