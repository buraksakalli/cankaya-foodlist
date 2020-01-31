'use strict';

module.exports = (app) => {
  const foodList = require('../controller/index');

  app.route('/all')
    .get(foodList.list_all_food);
  app.route('/date')
    .get(foodList.list_monthly);
};