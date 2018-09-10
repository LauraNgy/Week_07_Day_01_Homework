const assert = require('assert');
const PrimeChecker = require('../models/prime_checker.js');

describe('Prime Checker', function() {
  it('should be able to find a prime number', function () {
    const actual = true;
    const prime = new PrimeChecker();
    const expected = prime.checkPrime(17);
    assert.strictEqual(actual, expected);
  });
  it('should be able to find a non-prime number', function () {
    const actual = false;
    const prime = new PrimeChecker();
    const expected = prime.checkPrime(6);
    assert.strictEqual(actual, expected);
  });
  it('should return 1 as non-prime', function () {
    const actual = false;
    const prime = new PrimeChecker();
    const expected = prime.checkPrime(1);
    assert.strictEqual(actual, expected);
  });
});
