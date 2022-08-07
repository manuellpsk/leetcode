const isIsomorphic = require("./205/205.js");
test("transform egg to add", () => {
  expect(isIsomorphic("egg", "add")).toBe(true);
});

test("transform foo to bar", () => {
  expect(isIsomorphic("foo", "bar")).toBe(false);
});

test("transform paper to title", () => {
  expect(isIsomorphic("paper", "title")).toBe(true);
});

test("transform badc to baba", () => {
  expect(isIsomorphic("badc", "baba")).toBe(false);
});
