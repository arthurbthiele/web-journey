import { updateDepths } from "../wordDepths";

describe("when passed the starting graph containing just the word 'a'", () => {
  it("should have 'at' at depth 1", () => {
    const depths = {};
    updateDepths(depths, [{ id: "a", label: "a" }]);
    expect(depths["at"]).toEqual(1);
  });
  it("should have 'cat' at depth 2", () => {
    const depths = {};
    updateDepths(depths, [{ id: "a", label: "a" }]);
    expect(depths["cat"]).toEqual(2);
  });
  it("should have 'dreams' at depth 5", () => {
    const depths = {};
    updateDepths(depths, [{ id: "a", label: "a" }]);
    expect(depths["dreams"]).toEqual(5);
  });
});

describe("when passed a graph containing both 'a' and 'at'", () => {
  it("should have 'cat' at depth 1", () => {
    const depths = {};
    updateDepths(depths, [
      { id: "a", label: "a" },
      { id: "at", label: "at" },
    ]);
    expect(depths["cat"]).toEqual(1);
  });
});
