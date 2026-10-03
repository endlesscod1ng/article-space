import { render, screen } from "@testing-library/react";
import { AppButton } from "./AppButton";

describe("AppButton", () => {
  test("first param", () => {
    render(<AppButton>AppButton</AppButton>);
    expect(screen.getByText("AppButton"));
  });
});
