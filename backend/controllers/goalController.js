// Home of the functions
const asyncHandler = require('express-async-handler')

// function 1
// @desc  Get goals
// @route GET /api/goals
// @access  Private (all will be private after adding authentication)
const getGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: 'GET request - Get goal data' })
})

// function 2
// @desc  Post a goal
// @route Post /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({
    message: 'POST request - Set new goal',
  })
})

// function 3
// @desc  Update a goal
// @route PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `PUT request - Update existing goal ${req.params.id}`,
  })
})

// function 4
// @desc  Delete a goal
// @route DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `DELETE request - Delete existing goal ${req.params.id}`,
  })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
