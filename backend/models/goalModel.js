// Model Folder contains definitions of any resources we have

// goalModel file holds definition of schema for this particular resource of goalModel

// Bring in mongoose
const mongoose = require('mongoose')

// Goal model schema
const goalSchema = mongoose.Schema(
  {
    // creates association between a goal and user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add text value'],
    },
  },
  {
    // creates created at and updated at timestamps
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
