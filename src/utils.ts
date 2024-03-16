import { Address } from "./interfaces/store";

export const getSavingsPercentage = (price: number, discount: number) => {
  return ((discount * 100) / price).toFixed(1);
};

export const combineAddress = (address: Address): string => {
  const { addressLine1, addressLine2, city, state, zipCode, country } = address;
  const addressString = `${addressLine1}, ${
    addressLine2 ? addressLine2 + "," : ""
  }${city}, ${state} ${zipCode}, ${country}`;
  return addressString;
};
