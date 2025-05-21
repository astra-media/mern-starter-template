import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.listen(port, () => console.log(`Server running on port ${port}`))
