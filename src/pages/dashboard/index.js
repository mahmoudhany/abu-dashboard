import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card'

export default function Dashboard() {
  const url = 'https://dataservice.accuweather.com/forecasts/v1/daily/1day/127164?apikey=hBJ9Gqojcsy6qOiRAToOgjiarNnmkgjL&metric=true'
  const [forecast, setForecast] = useState({})
  const [loading, setLoading] = useState(false)

  const getForcast = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url)
      setForecast(response.data.DailyForecasts[0])
      setLoading(false)
    } catch (error) {
      console.log('error ', error);
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
