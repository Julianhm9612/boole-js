import { boole } from '../index';

describe("boole", () => {
  it("Get inputs", () => {
    expect(boole('(x&y)&(x&y)')).toEqual(4);
  });
});