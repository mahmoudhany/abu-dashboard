import React from 'react'
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'
import { IoSunny, IoCloudyNight } from 'react-icons/io5'
import './card.scss';

export default function Card({ value, title, type }) {
  return (
    <div className='weather-card m-2'>
      <div className="title">
        <div>{title}</div>
        <div>
          {
            type ?
              (title === 'Min Temperature' ?
                < FaTemperatureLow color='cornflowerblue' />
                : < FaTemperatureHigh color='crimson' />
              ) :
              (title === 'Day' ?
                <IoSunny color='gold' /> :
                <IoCloudyNight color='#313163' />
              )
          }
        </div>
      </div>
      <div className="value">
        {
          type === 'temp' ?
            `${value} °C` :
            value
        }
      </div>
    </div>
  )
}
