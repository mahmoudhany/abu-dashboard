import React from 'react'
import messengerImg from '../../assets/messenger.jpg'
import './message.scss'

export default function Message() {
  return (
    <div className='col-10 col-md-8 message'>
      <div className="message_img">
        <img src={messengerImg} alt="notification" />
      </div>
      <div className="message_details">
        <div className="message_details-sender">
          <span>John Doe </span>
        </div>
        <div className="message_details-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias odio praesentium,
        </div>
        <div className='message_details-bottom'>
          <div className="message_details-time">10 minutes ago</div>
          <button className='btn btn-success'>
            Reply
          </button>
        </div>
      </div>
    </div>
  )
}
