import React, { Dispatch, createContext, useContext, useReducer } from "react";
import {
  ACTIONS,
  StoreDto,
  ReducerDto,
  Address,
  SelectedProducts,
} from "../interfaces/store";

export const initialAddressState: Address = {
  fullName: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  id: '',
}

const initialState: StoreDto = {
  products: [],
  savedAddresses: [],
  selectedProducts: {},
  totalPrice: 0,
  shippingAddress: initialAddressState,
  billingAddress: initialAddressState,
  selectedAddress: "",
  enableNext: false
};

const reducer = (state: StoreDto, { type, payload }: ReducerDto) => {
  let enableNext = false;
  console.log(type);
  switch (type) {
    case ACTIONS.ADD_PRODUCT_IN_BAG:
      let selectedProducts: SelectedProducts = {};
      if (payload && payload.id) {
        selectedProducts = { ...state.selectedProducts }
        selectedProducts[payload.id] = payload;
      }
      return { ...state, selectedProducts, enableNext: true };
    case ACTIONS.REMOVE_PRODUCT_FROM_BAG:
      if (state.selectedProducts.hasOwnProperty(payload)) {
        delete state.selectedProducts[payload];
      }
      enableNext = true;
      if (!Object.keys(state.selectedProducts).length) {
        enableNext = false;
      }
      return { ...state, enableNext };
    case ACTIONS.SET_TOTAL_PRICE_OF_BAG:
      return { ...state, totalPrice: payload };
    case ACTIONS.SET_PRODUCTS:
      return { ...state, products: payload }
    case ACTIONS.SET_SAVED_ADDRESSES:
      return { ...state, savedAddresses: payload }
    case ACTIONS.SET_SELECTED_ADDRESS:
      enableNext = false;
      if (payload) {
        enableNext = true
      }
      return { ...state, selectedAddress: payload, enableNext }
    case ACTIONS.SET_FILLED_ADDRESS:
      return { ...state, shippingAddress: payload ?? initialAddressState }
    case ACTIONS.RESET_ALL_SELECTIONS:
      let products = state.products;
      let savedAddresses = state.savedAddresses;
      return { ...initialState, products, savedAddresses };
    case ACTIONS.DISABLE_NEXT:
      enableNext = false;
      if (state.selectedAddress) {
        enableNext = true
      }
      return { ...state, enableNext }
    default:
      return { ...state };
  }
};

interface GlobalStoreContextType {
  state: StoreDto;
  dispatch: Dispatch<ReducerDto>;
}

const GlobalStoreContext = createContext<GlobalStoreContextType | undefined>(undefined);


export const GlobalStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<React.Reducer<StoreDto, ReducerDto>>(reducer, initialState);
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
