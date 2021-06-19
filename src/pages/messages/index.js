import React from 'react'
import Message from '../../components/message'

export default function Messages() {
  const messagesArray = new Array(6).fill(0)
  return (
    <div className='row col-12 col-md-10 col-lg-8 justify-content-center mx-auto'>
      {messagesArray.map((_, index) => <Message key={index} />)}
    </div>
  )
}
