const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submit', (event) => {
    const number = event.detail;
    const result = this.checkPrime(number);
    PubSub.publish('PrimeChecker:is-prime', result);
  });

};

PrimeChecker.prototype.checkPrime = function (number) {
  let result = true;
  if (number > 2) {
    let divCount = 0;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        divCount++;
      }
    }
    if (divCount > 0) {
      result = false;
    }
  }
  else {
    result = false;
  }
  return result;
};

module.exports = PrimeChecker;
