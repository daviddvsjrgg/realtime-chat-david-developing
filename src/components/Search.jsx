import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/16122268/pexels-photo-16122268/free-photo-of-woman-among-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search