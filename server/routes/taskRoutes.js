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

//Read All Task
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

//Update Task
router.put('/:id', async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

//Delete Task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: 'Task Deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
