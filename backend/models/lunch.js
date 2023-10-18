const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lunchSchema = new Schema({
  canteen: {
    type: Schema.Types.ObjectId,
    ref: 'Canteen', // Reference to the Canteen model
    required: true,
  },
  dishName: {
    type: String,
    required: true,
  },
});

const Lunch = mongoose.model('Lunch', lunchSchema);

module.exports = Lunch;
