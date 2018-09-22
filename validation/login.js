const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !_.isEmpty(data.email) ? data.email : '';
  data.password = !_.isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (_.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (_.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
