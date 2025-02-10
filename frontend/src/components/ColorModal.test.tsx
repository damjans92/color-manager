import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ColorModal from "./ColorModal";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import colorsReducer from "../redux/slices/colorSlice";
import "@testing-library/jest-dom";

describe("ColorModal", () => {
  it("renders the correct heading when adding a new color", () => {
    const mockStore = configureStore({
      reducer: { colors: colorsReducer },
    });

    render(
      <Provider store={mockStore}>
        <ColorModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    expect(
      screen.getByRole("heading", { name: /add new color/i })
    ).toBeInTheDocument();
  });

  it("calls onClose when Close button is clicked", async () => {
    const mockStore = configureStore({
      reducer: { colors: colorsReducer },
    });

    const onCloseMock = jest.fn();

    render(
      <Provider store={mockStore}>
        <ColorModal isOpen={true} onClose={onCloseMock} />
      </Provider>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });

    await new Promise((resolve) => setTimeout(resolve, 100));
    await userEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
