import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import { userEvent } from "@testing-library/user-event";

describe("HEader component", () => {
  it("should render header login button", async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");
    await userEvent.click(loginButton);
    expect(screen.getByText("Logout")).toBeInTheDocument();
    const logoutButton = screen.getByText("Logout");
    await userEvent.click(logoutButton);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
