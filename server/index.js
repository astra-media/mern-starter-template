import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()
const app = express()
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

import taskRoutes from './routes/taskRoutes.js'
app.use('/api/tasks', taskRoutes)

app.get('/api', (req, res) => {
  res.send('API is running...')
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on port ${port}`))
