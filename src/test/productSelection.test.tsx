import { render, screen, fireEvent, configure } from "@testing-library/react";
import * as AppContext from "../hooks/useGlobalContext";
import { MockState, SuccessMockForUseFetch } from "./mocks/products";
import App from "../App"
import * as useApi from "../hooks/useApi";
import '@testing-library/jest-dom'
describe("ProductSelection", () => {
  jest.mock("../hooks/useGlobalContext.tsx");

  const mockDispatch = jest.fn();

  beforeEach(() => {
    configure({ testIdAttribute: "data-automation-id" });
    jest
      .spyOn(useApi, 'useFetch')
      .mockImplementation(() => SuccessMockForUseFetch);

    jest
      .spyOn(AppContext, 'useGlobalContext')
      .mockImplementation(() => ({ state: MockState, dispatch: mockDispatch }));
  });

  it("renders APP, and the products page", () => {
    render(<App />);
    expect(screen.getByText("Nike Dunk Low Retro")).toBeInTheDocument();
  });

  it("select a product", () => {
    render(<App />);
    const element = screen.getByTestId("product-card");
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(screen.getByText("Added to the bag")).toBeInTheDocument();
  });

});


