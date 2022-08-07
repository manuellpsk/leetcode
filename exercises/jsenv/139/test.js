const singleNumber = require("./singleNumber");
test("[2,2,1]", () => {
  expect(singleNumber([2, 2, 1])).toBe(1);
});

test("[4,1,2,1,2]", () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});

test("[1]", () => {
  expect(singleNumber([1])).toBe(1);
});
