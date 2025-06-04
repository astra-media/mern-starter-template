import { useState } from 'react'
import axios from 'axios'
import { Form, Button, Row, Col } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/user/login', { email, password })
      localStorage.setItem('userInfo', JSON.stringify(data))
      window.location.reload()
    } catch (err) {
      console.log(err.response?.data?.message || 'Error')
    }
  }

  return (
    <div>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Sign in</h1>
          <Form onSubmit={loginHandler}>
            <Form.Group>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                className='my-2'
                type='password'
                placeholder='Enter Password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type='submit'>Sign in</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
