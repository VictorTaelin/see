const inl = require("./../inl.js");
const assert = require("assert");

describe("inl", function(){
  it("must be able to show the contents of a pure function", function(){
    assert(
      inl (a => b => a(b)(c => c))
      === "a => b => a(b)(c => c)");
  });
});
