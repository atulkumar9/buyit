export enum ACTIONS {
  ADD_PRODUCT_IN_BAG = "add-products-in-bag",
  REMOVE_PRODUCT_FROM_BAG = "remove-product-from-bag",
  SET_TOTAL_PRICE_OF_BAG = "set-total-price-of-bag",
  SET_PRODUCTS = "set-products",
  SET_SAVED_ADDRESSES = "set-saved-addresses",
  SET_SELECTED_ADDRESS = "set-selected-address",
  SET_FILLED_ADDRESS = "set-filled-address",
  RESET_ALL_SELECTIONS = "reset-all-selections",
  DISABLE_NEXT = "disable-next",
}

export type ProductsForOrder = {
  id: string;
  totalQuantity: number;
  finalPrice: number;
  name: string;
  imageUrl: string;
  savings: number;
};

export interface Address {
  id: string;
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface SelectedProducts {
  [key: string]: ProductsForOrder;
}

export interface StoreDto {
  products: Array<ProductDto>;
  savedAddresses: Array<Address>;
  selectedProducts: SelectedProducts;
  totalPrice: number;
  shippingAddress: Address;
  billingAddress: Address;
  selectedAddress: string;
  enableNext: Boolean;
}

export interface ProductDto {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  discount?: string;
  size: Array<string>;
}

export interface ReducerDto {
  type: ACTIONS;
  payload: any;
}

export interface OrderDto {
  id: string;
  totalPrice: number;
  selectedProducts: SelectedProducts;
  shippingAddress: Address;
}
