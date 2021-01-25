import { arrays } from ".";

describe("arrays", () => {
  let a;
  beforeEach(function () {
    a = [1, 2, 3, 4];
  });
  it("you should be able to determine the location of an item in an array", () => {
    expect(arrays.indexOf(a, 3)).toEqual(2);
    expect(arrays.indexOf(a, 5)).toEqual(-1);
  });
});
