import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>David Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/16122268/pexels-photo-16122268/free-photo-of-woman-among-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>David Dwiyanto</span>
        <button>Logout</button>  
      </div>
    </div>
  )
}

export default Navbar