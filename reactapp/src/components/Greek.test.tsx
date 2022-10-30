import { screen, render } from "@testing-library/react";
import Greet from "./Greet";

test("Greet with hello", () => {
  render(<Greet />);
  const text = screen.getByText("Hello");
  // const text = screen.getByText(\hello\i); not case sensitive
  expect(text).toBeInTheDocument();
});

test("Greet with hello and name", () => {
  render(<Greet name="vasu" />);
  const text = screen.getByText("Hello vasu");
  // const text = screen.getByText(\hello\i); not case sensitive
  expect(text).toBeInTheDocument();
});
