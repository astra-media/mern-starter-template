import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()

app.use(cookieParser())
app.use(express.json()) //middleware to parses JSON payloads based on body-parser
app.use(cors()) // allow requests from any origin
app.use(morgan('dev')) //HTTP request logger middleware

//MongoDB
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('MongoDB connected')
}

connectDB().catch((err) => {
  console.log(err)
})

//Routes
import taskRoutes from './routes/taskRoutes.js'
app.use('/api/tasks', taskRoutes)

import authRoutes from './routes/authRoutes.js'
app.use('/api/user', authRoutes)

app.get('/api', (req, res) => {
  res.send('API is running...')
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on port ${port}`))
