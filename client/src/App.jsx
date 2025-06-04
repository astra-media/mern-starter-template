import { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import Task from './components/Task'
import Login from './components/Login'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState('')

  const getUserInfo = () => {
    const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : ''
    setUser(userInfo)
  }

  const logoutHandler = async () => {
    try {
      await axios.post('/api/user/logout')
      localStorage.setItem('userInfo', '')
      window.location.reload()
      console.log('logout')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!user) {
      getUserInfo()
    }
  }, [user])

  return (
    <Container>
      {user ? (
        <>
          <div className='d-flex justify-content-end mt-2'>
            <b className='mx-2'>User: {user.email}</b>
            <Button onClick={() => logoutHandler()}>Log Out</Button>
          </div>
          <Task />
        </>
      ) : (
        <Login />
      )}
    </Container>
  )
}

export default App
