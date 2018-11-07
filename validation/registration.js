const Validator = require('validator');
const isEmpty = require ('./is-empty');   

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if(!Validator.isLength(data.name, {min: 2, max: 30})) {
    errors.name = 'name must be between 2 and 30 characters';
  }

  if(isEmpty(data.name) || Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if(isEmpty(data.email) || Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  else if(!Validator.isEmail(data.email)) {
    errors.name = 'email is invalid';
  }

  if(isEmpty(data.password) || Validator.isEmpty(data.password)) {
    errors.password = 'Passssword field is required';
  }

  else if(!Validator.isLength(data.password, {min:6, max:30})) {
    errors.password = 'Password must be at least 6 characters';
  }

  if(isEmpty(data.password2) || Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm passssword field is required';
  }

  else if(!Validator.equals(data.password, data.password2)) {
    errors.password = 'passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}