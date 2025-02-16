const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Greetings from Rankine Lo in the terminal!");
  });
});
