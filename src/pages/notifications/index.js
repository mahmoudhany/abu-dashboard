import React from 'react'
import Notification from '../../components/notification'

export default function Notifications() {
  const notificationsArray = new Array(6).fill(0)
  return (
    <div className='row col-10 justify-content-center my-4 mx-auto'>
      {notificationsArray.map((_, index) => <Notification key={index} />)}
    </div>
  )
}
