import { classNames } from "@/shared/helprers/classNames/classNames";

describe("classNames", () => {
  test("first param", () => {
    expect("1").toBe(classNames("1", {}, []));
  });
  test("with additional", () => {
    expect("1 555 666 777").toBe(classNames("1", {}, ["555", "666", "777"]));
  });

  test("with mods", () => {
    expect("1 555 666 777 2 3 4").toBe(
      classNames("1", { "2": true, "3": true, "4": true }, [
        "555",
        "666",
        "777",
      ]),
    );
  });

  test("with mods false", () => {
    expect("1 555 666 777 2 3").toBe(
      classNames("1", { "2": true, "3": true, "4": false }, [
        "555",
        "666",
        "777",
      ]),
    );
  });
  test("with mods undefined", () => {
    expect("1 555 666 777 2 3").toBe(
      classNames("1", { "2": true, "3": true, "4": undefined }, [
        "555",
        "666",
        "777",
      ]),
    );
  });
});
