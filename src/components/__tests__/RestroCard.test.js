import { render, screen } from "@testing-library/react";
import RestroCard from "../RestroCard";
import MOCK_DATA from "../../mockFactory/restroCardMock.json";
import "@testing-library/jest-dom";

describe("RestroCard", () => {
  it("should render default card without promoted label", () => {
    render(<RestroCard resData={MOCK_DATA} />);

    expect(screen.getByText("UBQ by Barbeque Nation")).toBeInTheDocument();
  });
});
