const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submit', (event) => {
    const number = event.detail;
    const result = this.checkPrime(number);
    PubSub.publish('PrimeChecker:is-prime', number);
  });

};

PrimeChecker.prototype.checkPrime = function (number) {
  let result = false;
  if (number > 2) {
    let divCount = 2;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        divCount++;
      }
    }
    if (divCount > 2) {
      result = true;
    }
  }
};

module.exports = PrimeChecker;
