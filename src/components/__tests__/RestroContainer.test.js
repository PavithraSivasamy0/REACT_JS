import { fireEvent, render, screen } from "@testing-library/react";
import RestroContainer from "../RestroContainer";
import MOCK_DATA from "../../mockFactory/restroContainerMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should render the whole restroConatiner(body)", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <RestroContainer />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByText("Search");
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {
    target: {
      value: "momo",
    },
  });
  fireEvent.click(searchBtn);
  const card = screen.getAllByTestId("restroCard");
  expect(card.length).toEqual(1);
});
