import React from "react";
import ProductSelection from "../steps/ProductSelection";
import SelectAddress from "../steps/SelectAddress";
import Checkout from "../steps/Checkout";
import Shoes from "../assets/icons/shoes.svg";
import Address from "../assets/icons/address.svg";
import CheckoutIcon from "../assets/icons/checkout.svg";

const STEPS = [
  {
    name: "product-selection",
    label: "Add Shoes",
    component: <ProductSelection />,
    icon: Shoes
  },
  {
    name: "address-details",
    label: "Select Address",
    component: <SelectAddress />,
    icon: Address
  },
  {
    name: "checkout",
    label: "Checkout",
    component: <Checkout />,
    icon: CheckoutIcon
  },
];

export default STEPS;