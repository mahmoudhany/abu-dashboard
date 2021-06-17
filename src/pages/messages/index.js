import React from 'react'
import Message from '../../components/message'

export default function Messages() {
  const messagesArray = new Array(6).fill(0)
  return (
    <div className='row col-8 justify-content-center my-4 mx-auto'>
      {messagesArray.map((_, index) => <Message key={index} />)}
    </div>
  )
}
