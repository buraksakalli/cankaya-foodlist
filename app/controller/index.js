'use strict';

const Food = require('../models/index');

exports.list_all_food = (req, res) => {
  Food.getAllFood((err, food) => {
    res.send(food);
  });
};

exports.list_monthly = (req, res) => {
  Food.getFoodByDate((err, food) => {
    res.send(food);
  });
};

exports.hello_world = (req, res) => {
  res.json({
    "message": "Welcome to the Cankaya University API"
  })
};