import { useEffect, useState } from "react";
import * as S from "../styles/checkout";
import { useGlobalContext } from "../hooks/useGlobalContext";
import CheckoutItem from "../components/CheckoutItem";
import { ACTIONS } from "../interfaces/store";
import { combineAddress } from "../utils";
import {
  NO_ADDRESS_SELECTED,
  NO_PRODUCT_SELECTED,
} from "../constants/appConstants";
import { usePost } from "../hooks/useApi";
import Loader from "../components/Loader";
import { placeOrder } from "../api";
import { v4 as uuidv4 } from "uuid";
import { Error } from "../styles/common";
import NoProductFound from "../assets/icons/no-products.svg";
import NoAddressFroud from "../assets/icons/no-location.svg";

interface OnOrderPlacedProps {
  onOrderPlaced: (msg: string) => void;
}

const Checkout = ({ onOrderPlaced }: OnOrderPlacedProps) => {
  const {
    state: { selectedProducts, selectedAddress, totalPrice, savedAddresses },
    dispatch,
  } = useGlobalContext();

  const {
    data: postPlacedOrderData,
    error: postPlacedOrderError,
    loading: postPlacedOrderLoading,
    postData,
  } = usePost(placeOrder);

  const [postErrorMessage, setPostErrorMessage] = useState(null);

  useEffect(() => {
    if (postPlacedOrderData && postPlacedOrderData.success) {
      onOrderPlaced(postPlacedOrderData.message);
    }
  }, [onOrderPlaced, postPlacedOrderData]);

  useEffect(() => {
    let totalBill = Object.keys(selectedProducts).reduce(
      (acc, id) => acc + selectedProducts[id].finalPrice,
      0
    );
    dispatch({ type: ACTIONS.SET_TOTAL_PRICE_OF_BAG, payload: totalBill });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Object.keys(selectedProducts).length]);

  useEffect(() => {
    let timeout: any = null;
    if (postPlacedOrderError) {
      setPostErrorMessage(postPlacedOrderError);
      timeout = setTimeout(() => {
        setPostErrorMessage(null);
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [postPlacedOrderError]);

  const onPlaceOrder = async () => {
    await postData({
      id: uuidv4(),
      totalPrice,
      selectedProducts,
      selectedAddress,
    });
  };

  const getSelectedAddress = () => {
    return combineAddress(
      savedAddresses.filter((address) => address.id === selectedAddress)[0]
    );
  };

  return (
    <S.CheckoutContainer>
      <Loader loading={postPlacedOrderLoading}></Loader>
      <h1>Checkout</h1>
      {Object.keys(selectedProducts).length === 0 ? (
        <>
          <p>{NO_PRODUCT_SELECTED}</p>
          <S.NotFoundImg src={NoProductFound} alt="no products" />
        </>
      ) : !selectedAddress ? (
        <>
          <p>{NO_ADDRESS_SELECTED}</p>
          <S.NotFoundImg src={NoAddressFroud} alt="no address" />
        </>
      ) : (
        <>
          <div className="selected-products">
            <h2>Bag</h2>
            <S.CheckoutItemsContainer>
              {Object.keys(selectedProducts).map((id) => (
                <CheckoutItem id={id} />
              ))}
            </S.CheckoutItemsContainer>
            <h3>Total Price: ₹{totalPrice}</h3>
          </div>
          <div className="address-section">
            <div>
              <h2>Shipping Address:</h2>
              <p>{getSelectedAddress()}</p>
            </div>
          </div>
          <S.OrderButton onClick={() => onPlaceOrder()}>
            Place Order
          </S.OrderButton>
          {postErrorMessage && <Error>{postErrorMessage}</Error>}
        </>
      )}
    </S.CheckoutContainer>
  );
};

export default Checkout;
