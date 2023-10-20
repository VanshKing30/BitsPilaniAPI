const asyncHandler = require('express-async-handler');
const CanteenLoginInfo = require('../models/canteenLoginInfo');
const Breakfast = require('../models/breakfast');
const Lunch = require('../models/lunch');
const Dinner = require('../models/dinner');

const fetchDishesByModel = async (canteenId, model) => {
    const dishes = await model.find({ canteen: canteenId }).select('dishName').exec();
    return dishes.length > 0 ? dishes : ['Not Added Yet'];
};

const viewStudentProfile = asyncHandler(async (req, res, next) => {
    const canteenNames = await CanteenLoginInfo.find({}, 'name').exec();
    const canteenDetails = [];

    for (const canteen of canteenNames) {
      const canteenName = canteen.name;
      const canteenId = canteen._id;

      const breakfastDishes = await fetchDishesByModel(canteenId, Breakfast);
      const lunchDishes = await fetchDishesByModel(canteenId, Lunch);
      const dinnerDishes = await fetchDishesByModel(canteenId, Dinner);

      canteenDetails.push({
        canteenName,
        breakfast: breakfastDishes,
        lunch: lunchDishes,
        dinner: dinnerDishes,
      });
    }

    res.json(canteenDetails);
});

module.exports = {
  viewStudentProfile,
};
