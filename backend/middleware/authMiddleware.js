const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// create a protect function
const protect = asyncHandler(async (req, res, next) => {
  // initialize a variable called token
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // get the token from the bearer header
      token = req.headers.authorization.split(' ')[1]

      // verify the token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      )

      // get user from the token
      req.user = await User.findById(decoded.id).select(
        '-password'
      )
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized so no token for you')
  }
})

module.exports = { protect }
