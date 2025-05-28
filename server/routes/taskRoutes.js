import express from 'express'
import Task from '../models/Task.js'

const router = express.Router()

//Create Task
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

//Read all Task
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
