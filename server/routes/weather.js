import express from 'express'
import axios from 'axios'

const router = express.Router()

//@desc Get Weather
//@route /api/weather/:city
router.get('/:city', async (req, res) => {
  const city = req.params.city
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          units: 'imperial',
          appid: process.env.WEATHER_API_KEY,
        },
      }
    )
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' })
  }
})

export default router
