const asyncHandler = require('express-async-handler');
const Breakfast = require('../models/breakfast');
const Lunch = require('../models/lunch');
const Dinner = require('../models/dinner');

// Controller function to get the canteen's dashboard
const getCanteenDashboard = asyncHandler(async (req, res, next) => {
  const canteenId = req.params.id;

  const breakfastDishes = await Breakfast.find({ canteen: canteenId }).select('dishName').exec();
  const lunchDishes = await Lunch.find({ canteen: canteenId }).select('dishName').exec();
  const dinnerDishes = await Dinner.find({ canteen: canteenId }).select('dishName').exec();

  res.json({
    breakfast: breakfastDishes.length > 0 ? breakfastDishes : ['Not Added Yet'],
    lunch: lunchDishes.length > 0 ? lunchDishes : ['Not Added Yet'],
    dinner: dinnerDishes.length > 0 ? dinnerDishes : ['Not Added Yet'],
  });
});

// Controller function to add a breakfast dish
const addBreakfastDish = asyncHandler(async (req, res, next) => {
  const canteenId = req.params.id;
  const { dish } = req.body;

  const existingDish = await Breakfast.findOne({ canteenId, dish }).exec();

  if (existingDish) {
    return res.json({ message: 'Dish already added' });
  }

  const newDish = new Breakfast({ canteenId, dish });
  await newDish.save();

  res.json({ message: 'Dish added successfully' });
});

// Controller function to remove a breakfast dish
const removeBreakfastDish = asyncHandler(async (req, res, next) => {
  const canteenId = req.params.id;
  const { dish } = req.body;

  await Breakfast.deleteOne({ canteenId, dish }).exec();
  res.json({ message: 'Dish removed successfully' });
});

// Implement similar functions for lunch and dinner dishes
// addLunchDish, removeLunchDish, addDinnerDish, and removeDinnerDish

// Controller function to add a lunch dish
const addLunchDish = asyncHandler(async (req, res, next) => {
  const canteenId = req.params.id;
  const { dish } = req.body;

  const existingDish = await Lunch.findOne({ canteenId, dish }).exec();

  if (existingDish) {
    return res.json({ message: 'Dish already added' });
  }

  const newDish = new Lunch({ canteenId, dish });
  await newDish.save();

  res.json({ message: 'Dish added successfully' });
});

// Controller function to remove a lunch dish
const removeLunchDish = asyncHandler(async (req, res, next) => {
  const canteenId = req.params.id;
  const { dish } = req.body;

  await Lunch.deleteOne({ canteenId, dish }).exec();
  res.json({ message: 'Dish removed successfully' });

});

// Controller function to add a dinner dish
const addDinnerDish = asyncHandler(async (req, res, next) => {
  const canteenId = req.params.id;
  const { dish } = req.body;

  const existingDish = await Dinner.findOne({ canteenId, dish }).exec();

  if (existingDish) {
    return res.json({ message: 'Dish already added' });
  }

  const newDish = new Dinner({ canteenId, dish });
  await newDish.save();

  res.json({ message: 'Dish added successfully' });

});

// Controller function to remove a dinner dish
const removeDinnerDish = asyncHandler(async (req, res, next) => {
  const canteenId = req.params.id;
  const { dish } = req.body;

  await Dinner.deleteOne({ canteenId, dish }).exec();
  res.json({ message: 'Dish removed successfully' });

});

module.exports = {
  getCanteenDashboard,
  addBreakfastDish,
  removeBreakfastDish,
  addLunchDish,
  removeLunchDish,
  addDinnerDish,
  removeDinnerDish,
};
