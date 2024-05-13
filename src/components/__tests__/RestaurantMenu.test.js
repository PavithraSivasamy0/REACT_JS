import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../mockFactory/restroMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should  check for menu items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordianHeader = screen.getAllByTestId("collapse-btn");
  fireEvent.click(accordianHeader[0]);

  const items = screen.getAllByTestId("menu-list");
  expect(items.length).toBe(6);

  const addbtns = screen.getAllByRole("button", { name: "add +" });
  fireEvent.click(addbtns[0]);
  expect(screen.getByText("Cart 1")).toBeInTheDocument();
  expect(screen.getAllByTestId("menu-list").length).toBe(7);
  fireEvent.click(screen.getByRole("button", { name: "clear cart" }));
  expect(screen.getByText("Cart 0")).toBeInTheDocument();
});
