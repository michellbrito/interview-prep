var chai = require('chai');  
var assert = chai.assert;   
var expect = chai.expect;   
var should = chai.should()
var oddOrEven = require('../oddeven').oddOrEven;

describe("oddOrEven", function() {
  it('should return the string "odd" if a number IS NOT evenly divisible by 2', function() {
    var num = 777;

    var result = oddOrEven(num);

    expect(result).to.eql("odd");
  });

  it('should return the string "even" if a number IS evenly divisible by 2', function() {
    var num = 1002;

    var result = oddOrEven(num);

    expect(result).to.eql("even");
  });
});