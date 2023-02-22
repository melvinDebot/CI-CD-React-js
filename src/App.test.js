import { render, screen } from "@testing-library/react";
import Text from "./components/Text";

// TEST PROPS Component
describe("TextComponent", () => {
  it("renders the provided text", () => {
    const text = "Hello, World!";
    render(<Text text={text} />);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
