'use strict';

// finding yesterday for time range
const yesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return(yesterday);
}

// finding the last day of month.
const lastDayOfMonth = () => {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  return (lastDayOfMonth);
}

// Return an object for model
const getDate = () => {
  const result = {
    yesterday: yesterday(),
    lastDayOfMonth: lastDayOfMonth()
  }
  return (result)
}

module.exports = getDate;