'use strict';

const FoodSchema = require('./food');
const getDate = require('../utils/Dates');

const message = {
  "message": "Yemek listesi henüz yayınlanmamıştır."
}

const Food = (food) => {
  this.food = food.food;
  this.kcal = food.kcal;
  this.date = food.date;
};

Food.getAllFood = function (result) {
  FoodSchema.find()
    .exec()
    .then(docs => {
      result(null, docs)
    })
}

Food.getFoodByDate = (result) => {
  const date = getDate();
  FoodSchema.find({ date: { "$gte": date.yesterday, "$lt": date.lastDayOfMonth } })
    .exec()
    .then(docs => {
      if (docs.length > 0) {
        result(null, docs)
      } else {
        result(null, message);
      }
    })
}

module.exports = Food;