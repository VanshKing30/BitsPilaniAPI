const express = require('express');
const router = express.Router();

// Import canteen controller functions
const canteenController = require('../controllers/canteenController');

// Route for the canteen dashboard
router.get('/:id', canteenController.getCanteenDashboard);

// Route to add breakfast dish for a specific canteen
router.post('/:id/add_breakfast_dish', canteenController.addBreakfastDish);

// Route to add lunch dish for a specific canteen
router.post('/:id/add_lunch_dish', canteenController.addLunchDish);

// Route to add dinner dish for a specific canteen
router.post('/:id/add_dinner_dish', canteenController.addDinnerDish);

// Route to remove breakfast dish for a specific canteen
router.delete('/:id/remove_breakfast_dish', canteenController.removeBreakfastDish);

// Route to remove lunch dish for a specific canteen
router.delete('/:id/remove_lunch_dish', canteenController.removeLunchDish);

// Route to remove dinner dish for a specific canteen
router.delete('/:id/remove_dinner_dish', canteenController.removeDinnerDish);

module.exports = router;
