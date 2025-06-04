import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = express.Router()

//Dummy user DB
const users = [
  {
    _id: 1,
    email: 'test@example.com',
    password: await bcrypt.hash('123456', 10),
  },
]

//@desc Login Route
//@route /api/user/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = users.find((u) => u.email === email)

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credential' })
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: 120 }
  )

  res.cookie('token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  })
  res.json({ _id: user._id, email: user.email })
})

//@desc Logout Route
//@route /api/user/logout
router.post('/logout', (req, res) => {
  res.clearCookie('token')
  res.json({ message: 'Logged out' })
})

export default router
