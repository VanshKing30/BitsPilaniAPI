const Breakfast = require('../models/breakfastModel');
const Lunch = require('../models/lunchModel');
const Dinner = require('../models/dinnerModel');

// Controller function to get the canteen's dashboard
const getCanteenDashboard = async (req, res) => {
  const canteenId = req.params.id;

  try {
    const breakfastDishes = await Breakfast.find({ canteenId });
    const lunchDishes = await Lunch.find({ canteenId });
    const dinnerDishes = await Dinner.find({ canteenId });

    res.json({
      breakfast: breakfastDishes.length > 0 ? breakfastDishes : ["Not Added Yet"],
      lunch: lunchDishes.length > 0 ? lunchDishes : ["Not Added Yet"],
      dinner: dinnerDishes.length > 0 ? dinnerDishes : ["Not Added Yet"],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to add a breakfast dish
const addBreakfastDish = async (req, res) => {
  const canteenId = req.params.id;
  const { dish } = req.body;

  try {
    const existingDish = await Breakfast.findOne({ canteenId, dish });

    if (existingDish) {
      return res.json({ message: 'Dish already added' });
    }

    const newDish = new Breakfast({ canteenId, dish });
    await newDish.save();

    res.json({ message: 'Dish added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to remove a breakfast dish
const removeBreakfastDish = async (req, res) => {
  const canteenId = req.params.id;
  const { dish } = req.body;

  try {
    await Breakfast.deleteOne({ canteenId, dish });
    res.json({ message: 'Dish removed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Implement similar functions for lunch and dinner dishes
// addLunchDish, removeLunchDish, addDinnerDish, and removeDinnerDish

// Controller function to add a lunch dish
const addLunchDish = async (req, res) => {
  // Similar to addBreakfastDish
};

// Controller function to remove a lunch dish
const removeLunchDish = async (req, res) => {
  // Similar to removeBreakfastDish
};

// Controller function to add a dinner dish
const addDinnerDish = async (req, res) => {
  // Similar to addBreakfastDish
};

// Controller function to remove a dinner dish
const removeDinnerDish = async (req, res) => {
  // Similar to removeBreakfastDish
};

module.exports = {
  getCanteenDashboard,
  addBreakfastDish,
  removeBreakfastDish,
  addLunchDish,
  removeLunchDish,
  addDinnerDish,
  removeDinnerDish,
};
