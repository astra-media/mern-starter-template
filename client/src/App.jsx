import { useState } from 'react'
import axios from 'axios'

import { Form, Button, Row, Col, Container } from 'react-bootstrap'

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')
  const [weatherCache, setWeatherCache] = useState({})

  const handleSearch = async (e) => {
    e.preventDefault()
    if(weatherCache[city]){   //Example of Frontend cache, when not using backend cache
      setWeather(weatherCache[city])
      setCity('')
      console.log('Using cached data')
      return
    }
    try {
      const res = await axios.get(`/api/weather/${city}`)
      setWeatherCache(x => ({...x, [city]: res.data}))  //Example of Frontend cache, when not using backend cache
      setWeather(res.data)
      setCity('')
      console.log('Weather Chached')
    } catch (err) {
      console.error(err)
      alert('Failed to fetch weather')
    }
  }

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1 className='mb-4'>Weather Search</h1>
          <Form className='mb-4' onSubmit={handleSearch}>
            <Form.Group className='mb-4'>
              <Form.Control
                className='mb-2'
                value={city}
                placeholder='Enter city name'
                required
                onChange={(e) => setCity(e.target.value)}
              />
              <Button variant='primary' type='submit'>
                Search
              </Button>
            </Form.Group>
          </Form>
          {weather && (
            <div className='mt-4 border p-2'>
              <h2 className='font-semibold'>{weather.name}</h2>
              <p>{weather.weather[0].description}</p>
              <p>{`${weather.main.temp} °F`}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default App
