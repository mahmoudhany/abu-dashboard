import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card'

export default function Dashboard() {
  const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/127164?apikey=e1XDhiGSeALBihF6HHSWQVnkAIPWAu1a&metric=true'
  const [forecast, setForecast] = useState({})
  const [loading, setLoading] = useState(false)
  // const [offline, setOffline] = useState(false)

  const getForcast = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url)
      setForecast(response.data.DailyForecasts[0])
      localStorage.setItem('forecast', JSON.stringify(response.data.DailyForecasts[0]))
      setLoading(false)
    } catch (error) {
      // setOffline(true)
      let localForecast = localStorage.getItem('forecast')
      setForecast(JSON.parse(localForecast))
      console.log('local', localForecast);
      setLoading(false)
    }
  }

  useEffect(() => {
    getForcast()
  }, [])
  return (
    <div className='container '>
      {!navigator.onLine ?
        <div className="alert alert-danger mx-auto text-center"
          style={{ maxWidth: '350px' }} role="alert">
          You are offline now
        </div>
        : ''}
      <div className="row justify-content-center mx-auto">
        {
          !loading ?
            <>
              <Card
                value={forecast.Temperature?.Maximum?.Value}
                title={'Max Temperature'}
                type='temp'
              />
              <Card
                value={forecast.Temperature?.Minimum?.Value}
                title={'Min Temperature'}
                type='temp'
              />
              <Card
                value={forecast.Day?.IconPhrase}
                title='Day'
              />
              <Card
                value={forecast.Night?.IconPhrase}
                title='Night'
              />
            </> :
            <h3 className='text-center'>Loading...</h3>
        }
      </div>
    </div>
  )
}