import { updateDepths } from "../wordDepths";
const startingNodes = [{ id: "a", label: "a" }];
const depthOneWord = "at";
const depthTwoWord = "cat";
const depthFiveWord = "dreams";
const nonWord = "blargle";

describe("when passed the graph containing just the word 'a'", () => {
  it(`should have ${depthOneWord} at depth 1`, () => {
    const depths = {};
    updateDepths(depths, startingNodes);
    expect(depths[depthOneWord]).toEqual(1);
  });
  it(`should have ${depthTwoWord} at depth 2`, () => {
    const depths = {};
    updateDepths(depths, startingNodes);
    expect(depths[depthTwoWord]).toEqual(2);
  });
  it(`should have ${depthFiveWord} at depth 5`, () => {
    const depths = {};
    updateDepths(depths, startingNodes);
    expect(depths[depthFiveWord]).toEqual(5);
  });
  it(`should not contain the non-word ${nonWord}`, () => {
    const depths = {};
    updateDepths(depths, startingNodes);
    expect(depths).not.toContain(nonWord);
  });
});

describe("when passed a graph containing both 'a' and 'at'", () => {
  it(`should have ${depthTwoWord} at depth 1`, () => {
    const depths = {};
    updateDepths(depths, [
      { id: "a", label: "a" },
      { id: "at", label: "at" },
    ]);
    expect(depths[depthTwoWord]).toEqual(1);
  });
});

describe("when passed a graph, and then a word is added", () => {
  it("should correctly update the depths of affected words", () => {
    const depths = {};
    updateDepths(depths, startingNodes);
    startingNodes.push({ id: "at", label: "at" });
    updateDepths(depths, startingNodes);
    expect(depths[depthTwoWord]).toEqual(1);
  });
});

describe("when passed no nodes", () => {
  it("should have no depths", () => {
    const depths = {};
    const nodes = [];
    updateDepths(depths, nodes);
    expect(depths).toMatchObject({});
  });
});
