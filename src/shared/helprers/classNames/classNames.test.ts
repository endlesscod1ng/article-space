// import { classNames } from "@/shared/helprers/classNames/classNames";

import { classNames } from "./classNames";

describe("classNames", () => {

  test("one pa", () => {
    expect("1 555 666 777 2 3").toBe(
      classNames("1", { "2": true, "3": true, "4": false }, [
        "555",
        "666",
        "777",
      ]),
    );
  });
    expect("1 555 666 777 2 3").toBe(
      classNames("1", { "2": true, "3": true, "4": false }, [
        "555",
        "666",
        "777",
      ]),
    );
  });


});
