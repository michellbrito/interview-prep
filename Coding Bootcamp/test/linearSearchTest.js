var expect = chai.expect;


describe("linearSearch", function() {
  it("should return 2 when given the array [8, 22, 3, 0, -2] and a target of 3", function() {
    var arr = [8, 22, 3, 0, -2];
    var target = 3;

    var result = linearSearch(arr, target);

    expect(result).to.eql(2);
  });

  it("should return -1 when given the array [13, 5, 6] and a target of 11", function() {
    var arr = [13, 5, 6];
    var target = 11;

    var result = linearSearch(arr, target);

    expect(result).to.eql(-1);
  });

  it("should return -1 when given the array [] and a target of 0", function() {
    var arr = [];
    var target = 0;

    var result = linearSearch(arr, target);

    expect(result).to.eql(-1);
  });
});