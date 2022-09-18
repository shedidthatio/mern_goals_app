// 3 user routes total
// 1 - register/create a user
// 2 - login
// 3 - get the user's info

const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router
