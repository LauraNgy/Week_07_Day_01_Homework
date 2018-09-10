const ResultView = function () {

};

ResultView.prototype.handleResult = function (result) {
  const displayElement = document.querySelector('#result');
  if (result === true) {
    displayElement.textContent = "This number is prime.";
  }
  else {
    displayElement.textContent = "This number is not prime."
  }
};

modules.exports = ResultView;
