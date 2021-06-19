import React from 'react'
import './notification.scss'
import profileImg from '../../assets/profile.jpg'

export default function Notification() {
  return (

    <div className='col-10 notification'>
      <div className="notification_img">
        <img src={profileImg} alt="notification" />
      </div>
      <div className="notification_details">
        <div className="notification_details-title">
          <span>Sarah Doe </span>reacted to your post
        </div>
        <div className="notification_details-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias odio praesentium, quae est perspiciatis tempora rem vel fuga labore provident illum, veritatis obcaecati!
        </div>
        <div className="notification_details-time">10 minutes ago</div>
      </div>
    </div>
  )
}
