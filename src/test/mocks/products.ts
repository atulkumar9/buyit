const initialAddressState = {
  fullName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  id: "",
};

const products = [
  {
    id: "1",
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/buyit-22714.appspot.com/o/images%2Fdunk-low-retro-shoe-66RGqF.png?alt=media&token=0a85ff90-49a5-47c8-9c61-bab252383f66",
    size: ["UK 7", "UK 8", "UK 9", "UK 10"],
    price: "8295",
    discount: "0",
  },
];

const address = [
  {
    id: "2",
    fullName: "Amil Khare",
    addressLine1: "Bellandur",
    addressLine2: "",
    city: "Bangalore",
    state: "Karnataka",
    zipCode: "5600123",
    country: "India",
  },
];

export const MockState = {
  products,
  savedAddresses: [],
  selectedProducts: {},
  totalPrice: 0,
  shippingAddress: initialAddressState,
  billingAddress: initialAddressState,
  selectedAddress: "",
  enableNext: false,
};

export const SuccessMockForUseFetch = {
  data: {
    products,
    address,
  },
  loading: false,
  error: null,
};
