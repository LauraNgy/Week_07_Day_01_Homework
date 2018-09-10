const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:is-prime', (event) => {
    const result = event.detail;
    this.handleResult(result);
  });
};

ResultView.prototype.handleResult = function (result) {
  const displayElement = document.querySelector('#result');
  // console.log(result);
  if (result === true) {
    displayElement.textContent = "This number is prime.";
  }
  else {
    displayElement.textContent = "This number is not prime."
  }
};

module.exports = ResultView;
