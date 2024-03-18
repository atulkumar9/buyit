import React from "react";
import ProductSelection from "../steps/ProductSelection";
import SelectAddress from "../steps/SelectAddress";
import Checkout from "../steps/Checkout";
import Shoes from "../assets/icons/shoes.svg";
import Address from "../assets/icons/address.svg";
import CheckoutIcon from "../assets/icons/checkout.svg";

const STEPS = ({ onCheckoutHandler }: { onCheckoutHandler: Function }) => [
  {
    name: "product-selection",
    label: "Add Shoes",
    component: (...props: any) => <ProductSelection {...props} />,
    icon: Shoes
  },
  {
    name: "address-details",
    label: "Select Address",
    component: (...props: any) => <SelectAddress {...props} />,
    icon: Address
  },
  {
    name: "checkout",
    label: "Checkout",
    component: (...props: any) => <Checkout {...props} onOrderPlaced={onCheckoutHandler} />,
    icon: CheckoutIcon
  },
];

export default STEPS;