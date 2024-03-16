import React, { Dispatch, createContext, useContext, useReducer } from "react";
import {
  ACTIONS,
  SelectedProductDto,
  ReducerDto,
  Address,
  SelectedProducts,
} from "../interfaces/store";

const initialAddressState: Address = {
  fullName: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  id: '',
}

const initialState: SelectedProductDto = {
  products: [],
  savedAddresses: [],
  selectedProducts: {},
  totalPrice: 0,
  shippingAddress: initialAddressState,
  billingAddress: initialAddressState,
  selectedAddress: "",
};

const reducer = (state: SelectedProductDto, { type, payload }: ReducerDto) => {
  switch (type) {
    case ACTIONS.ADD_PRODUCT_IN_BAG:
      let selectedProducts: SelectedProducts = {};
      if (payload && payload.id) {
        selectedProducts = { ...state.selectedProducts }
        selectedProducts[payload.id] = payload;
      }
      return { ...state, selectedProducts };
    case ACTIONS.REMOVE_PRODUCT_FROM_BAG:
      if (state.selectedProducts.hasOwnProperty(payload)) {
        delete state.selectedProducts[payload];
      }
      return { ...state };
    case ACTIONS.SET_TOTAL_PRICE_OF_BAG:
      return { ...state, totalPrice: payload };
    case ACTIONS.SET_PRODUCTS:
      return { ...state, products: payload }
    case ACTIONS.SET_SAVED_ADDRESSES:
      return { ...state, savedAddresses: payload }
    case ACTIONS.SET_SELECTED_ADDRESS:
      return { ...state, selectedAddress: payload }
    default:
      return { ...state };
  }
};

interface GlobalStoreContextType {
  state: SelectedProductDto;
  dispatch: Dispatch<ReducerDto>;
}

const GlobalStoreContext = createContext<GlobalStoreContextType | undefined>(undefined);


export const GlobalStoreProvider = ({ children }: { children: React.ReactNode }) => {
  console.log("GlobalStoreProvider reached")
  const [state, dispatch] = useReducer<React.Reducer<SelectedProductDto, ReducerDto>>(reducer, initialState);
  return (
    <GlobalStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStoreContext.Provider >
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalStoreContext);
  if (!context) {
    throw new Error('useGlobalContext must be used with GlobalStoreProvider');
  }
  return context;
};
