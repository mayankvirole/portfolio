import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero content", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /mayank virole/i })).toBeInTheDocument();
  expect(screen.getByText(/solution analyst with 2 years of experience/i)).toBeInTheDocument();
});
