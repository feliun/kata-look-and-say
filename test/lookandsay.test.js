const expect = require("expect.js");
const initLookandsay = require("../lookandsay");

describe("Look and say sequence", () => {
  it("constructs the lookandsaymodule and returns the initial value by default", () => {
    const lookandsay = initLookandsay();
    expect(lookandsay.getResult()).to.equal(1);
    expect(lookandsay.next).to.be.a("function");
  });

  it("returns 11 from 1", () => {
    const lookandsay = initLookandsay();
    lookandsay.next();
    expect(lookandsay.getResult()).to.equal(11);
  });

  it("returns 21 from 1, 11", () => {
    const lookandsay = initLookandsay();
    lookandsay.next();
    lookandsay.next();
    expect(lookandsay.getResult()).to.equal(21);
  });
});