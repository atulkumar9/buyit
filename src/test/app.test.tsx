import { render, screen, fireEvent, configure } from "@testing-library/react";
import * as AppContext from "../hooks/useGlobalContext";
import { FilureMockForUseFetch, MockState, MockStateAfterSelectingAddress, MockStateAfterSelectingProduct, SuccessMockForUseFetch } from "./mocks/products";
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

  it("renders APP, product api failure", () => {
    jest
      .spyOn(useApi, 'useFetch')
      .mockImplementation(() => FilureMockForUseFetch);
    render(<App />);
    expect(screen.getByText("Something Went Wrong")).toBeInTheDocument();
    expect(screen.getByText("ref: test error")).toBeInTheDocument();
  });

  it("select a product", () => {
    render(<App />);
    const element = screen.getByTestId("product-card");
    expect(element).toBeInTheDocument();
    const nextBtn = screen.getByTestId("next-step-btn");
    expect(nextBtn).toBeDisabled();
    fireEvent.click(element);
    expect(mockDispatch).toBeCalled();
    expect(screen.getByText("Added to the bag")).toBeInTheDocument();
  });

  it("go to next page - address selection", () => {
    jest
      .spyOn(AppContext, 'useGlobalContext')
      .mockImplementation(() => ({ state: MockStateAfterSelectingProduct, dispatch: mockDispatch }));
    render(<App />);
    const nextBtn = screen.getByTestId("next-step-btn");
    expect(nextBtn).not.toBeDisabled();
    fireEvent.click(nextBtn);
    expect(mockDispatch).toBeCalled();
    expect(screen.getByText("Add a new Address")).toBeInTheDocument();
  });

  it("go to next page - checkout page", () => {
    jest
      .spyOn(AppContext, 'useGlobalContext')
      .mockImplementation(() => ({ state: { ...MockStateAfterSelectingAddress }, dispatch: mockDispatch }));
    render(<App />);
    const nextBtn = screen.getByTestId("next-step-btn");
    expect(nextBtn).not.toBeDisabled();
    fireEvent.click(nextBtn);
    expect(mockDispatch).toBeCalled();
    expect(screen.getByText("Add a new Address")).toBeInTheDocument();
    expect(nextBtn).not.toBeDisabled();
    fireEvent.click(nextBtn);
    expect(mockDispatch).toBeCalled();
    expect(screen.getByText("Bellandur, Bangalore, Karnataka 5600123, India")).toBeInTheDocument();
  });

  it("order placed page - mock order post call", () => {

  });

  it("add new address success", () => {

  });

  it("add new address failure", () => {

  });

  it("change address", () => {

  });


});


