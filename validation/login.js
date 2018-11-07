const Validator = require('validator');
const isEmpty = require ('./is-empty');   

module.exports = function validateLoginInput(data) {
  let errors = {};

  if(isEmpty(data.email) || Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  else if(!Validator.isEmail(data.email)) {
    errors.name = 'email is invalid';
  }

  if(isEmpty(data.password) || Validator.isEmpty(data.password)) {
    errors.password = 'Passssword field is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}