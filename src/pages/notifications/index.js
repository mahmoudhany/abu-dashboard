import React from 'react'
import Notification from '../../components/notification'

export default function Notifications() {
  const notificationsArray = new Array(6).fill(0)
  return (
    <div className='row col-12 col-md-10 col-lg-8  justify-content-center mx-auto'>
      {notificationsArray.map((_, index) => <Notification key={index} />)}
    </div>
  )
}
