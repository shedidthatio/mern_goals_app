// Each resource within this api will have it's own route file

// The following is using Common Module JS syntax vs ES2015 import syntax
// step 1 Bring in express
const express = require('express')

// step 2 Bring in router
const router = express.Router()

// step 5 Bring in controllers
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

// step 4 Create the routes

// for get and post routes
router.route('/').get(getGoals).post(setGoal)

// for update and delete routes
router.route('/:id').delete(deleteGoal).put(updateGoal)

// step 3 export module
module.exports = router
