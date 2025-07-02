import sortBy from "./sortBy";

describe("sortBy", () => {
  it("sorts numbers ascending by default", () => {
    const data = [{ a: 3 }, { a: 1 }, { a: 2 }];
    const result = sortBy(data, "a");
    expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
  });

  it("sorts numbers descending", () => {
    const data = [{ a: 3 }, { a: 1 }, { a: 2 }];
    const result = sortBy(data, "a", "desc");
    expect(result).toEqual([{ a: 3 }, { a: 2 }, { a: 1 }]);
  });

  it("sorts strings ascending", () => {
    const data = [{ a: "banana" }, { a: "apple" }, { a: "cherry" }];
    const result = sortBy(data, "a");
    expect(result).toEqual([{ a: "apple" }, { a: "banana" }, { a: "cherry" }]);
  });

  it("sorts strings descending", () => {
    const data = [{ a: "banana" }, { a: "apple" }, { a: "cherry" }];
    const result = sortBy(data, "a", "desc");
    expect(result).toEqual([{ a: "cherry" }, { a: "banana" }, { a: "apple" }]);
  });

  it("does not mutate original array", () => {
    const data = [{ a: 2 }, { a: 1 }];
    const copy = [...data];
    sortBy(data, "a");
    expect(data).toEqual(copy);
  });
});
