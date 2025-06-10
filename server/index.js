import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()
const app = express()
app.use(express.json()) //middleware to parses JSON payloads based on body-parser
app.use(cors()) // allow requests from any origin
app.use(morgan('dev')) //HTTP request logger middleware


//Routes
import weatherRoutes from './routes/weather.js'
app.use('/api/weather', weatherRoutes)


const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on port ${port}`))
