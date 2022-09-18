// @desc  Register a new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
  res.json({ message: 'Register user' })
}

// @desc  Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: 'Login user' })
}

// @desc  Get user's data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
  res.json({ message: 'Show user data' })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
