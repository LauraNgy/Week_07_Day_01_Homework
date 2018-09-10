const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const formInput = document.querySelector('#prime-checker-form');
  formInput.addEventListener('submit', (event) => {
    const number = event.target.number.value;
    PubSub.publish('FormView:number-submit', number);
  });
};

modules.exports = FormView;
