import React from 'react'

const Toast = ({ message }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="fixed top-2 right-56 bg-red-300 text-yellow-50 px-5 py-6 rounded-md">
                {message}
            </div>
        </div>
    )
}

export default Toast
