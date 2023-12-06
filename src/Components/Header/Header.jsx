import React from 'react'
import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='font-bold text-xl'>Knowledge Cafe</h1>
      <img src={profile} alt="profile" />
    </div>
  )
}

export default Header
