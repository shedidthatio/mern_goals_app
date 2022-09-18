// Each resource within this api will have it's own route file

// The following is using Common Module JS syntax vs ES2015 import syntax

// Bring in express
const express = require('express')

// Bring in router
const router = express.Router()

// Bring in controllers
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

// Create the routes
// for get and post routes
router.route('/').get(getGoals).post(setGoal)

// for update and delete routes
router.route('/:id').delete(deleteGoal).put(updateGoal)

// export the router
module.exports = router
