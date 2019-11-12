var chai = require('chai');  
var assert = chai.assert;   
var expect = chai.expect;   
var should = chai.should()
var addNumbers = require('../arithmetic').add;
var subtractNumbers = require('../arithmetic').subtract;
var multiplyNumbers = require('../arithmetic').multiply;
var divideNumbers = require('../arithmetic').divide;


describe("add", function() {
  it("should add two numbers", function() {
    var num1 = 10;
    var num2 = 24;

    var result = addNumbers(num1, num2);

    expect(result).to.eql(34);
  });
});

describe("subtract", function() {
  it("should subtract the second number from the first number", function() {
    var num1 = 100;
    var num2 = 91;

    var result = subtractNumbers(num1, num2);

    expect(result).to.eql(9);
  });
});

describe("multiply", function() {
  it("should multiply the two numbers", function() {
    var num1 = 7;
    var num2 = 70;

    var result = multiplyNumbers(num1, num2);

    expect(result).to.eql(490);
  });
});

describe("divide", function() {
  it("should divide the first number by the second number", function() {
    var num1 = 33;
    var num2 = 11;

    var result = divideNumbers(num1, num2);

    expect(result).to.eql(3);
  });
});