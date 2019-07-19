const expect = require("expect.js");
const initLookandsay = require("../lookandsay");

describe("Look and say sequence", () => {
  let lookandsay;

  beforeEach(() => {
    lookandsay = initLookandsay();
  });

  it("constructs the lookandsaymodule and returns the initial value by default", () => {
    expect(lookandsay.getResult()).to.equal(1);
    expect(lookandsay.next).to.be.a("function");
  });

  it("returns 11 from 1", () => {
    lookandsay.next();
    expect(lookandsay.getResult()).to.equal(11);
  });

  it("returns 21 from 1, 11", () => {
    lookandsay.next();
    lookandsay.next();
    expect(lookandsay.getResult()).to.equal(21);
  });

  it("returns 1211 from 1, 11, 21", () => {
    lookandsay.next();
    lookandsay.next();
    lookandsay.next();
    expect(lookandsay.getResult()).to.equal(1211);
  });

  it("returns 111221 from 1, 11, 21, 1211", () => {
    lookandsay.next();
    lookandsay.next();
    lookandsay.next();
    lookandsay.next();
    expect(lookandsay.getResult()).to.equal(111221);
  });
});