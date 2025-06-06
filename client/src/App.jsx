import { useEffect, useState } from 'react'
import axios from 'axios'

import { Form, Button, Row, Col, Container } from 'react-bootstrap'

const App = () => {
  const [task, setTask] = useState([])
  const [title, setTitle] = useState('')

  const fetchTask = async () => {
    const res = await axios.get('/api/tasks')
    setTask(res.data)
  }

  useEffect(() => {
    fetchTask()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    if (!title) return
    await axios.post('/api/tasks', { title })
    setTitle('')
    fetchTask()
  }

  const handleComplete = async (x) => {
    await axios.put(`/api/tasks/${x._id}`, { completed: !x.completed })
    fetchTask()
  }

  const handleDelete = async (x) => {
    await axios.delete(`/api/tasks/${x}`)
    fetchTask()
  }

  return (
    <Container>
      <h1 className='mb-4'>MERN Task App</h1>
      <Form className='mb-4' onSubmit={handleAdd}>
        <Form.Group className='mb-4'>
          <Form.Control
            className='mb-2'
            value={title}
            placeholder='New Task'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant='primary' type='submit'>
            Add Task
          </Button>
        </Form.Group>
      </Form>

      <ul>
        {task.map((x) => (
          <li key={x._id}>
            <Form.Group className='d-flex flex-row mb-2'>
              <Form.Label>{x.title}</Form.Label>
              <Form.Check
                type='checkbox'
                label='Completed?'
                checked={x.completed}
                onChange={() => handleComplete(x)}
                className='mx-4'
              />
              <Button
                className='text-bg-danger'
                onClick={() => handleDelete(x._id)}
              >
                Delete
              </Button>
            </Form.Group>
            <hr />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default App
