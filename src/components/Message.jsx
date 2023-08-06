import React from 'react'

export const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/17781404/pexels-photo-17781404/free-photo-of-wood-road-landscape-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="" />
        <span>Just now</span>
        </div>
        <div className="messageContent">
          <p>hello</p>
          <img
            src="https://images.pexels.com/photos/17781404/pexels-photo-17781404/free-photo-of-wood-road-landscape-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="" />
      </div>
    </div>
  )
}

export default Message