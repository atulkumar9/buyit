import { useEffect, useMemo, useState } from "react";
import STEPS from "../constants/steps";
import StepProgressBar from "./StepProgressBar";
import * as S from "../styles/stepTracker";
import { useFetch } from "../hooks/useApi";
import { getAllProducts, getAllSavedAddresses } from "../api";
import Fallback from "./Fallback";
import Loader from "./Loader";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ACTIONS } from "../interfaces/store";
import {
  FireStoreAddressCollection,
  FireStoreProductCollection,
} from "../firebase";
import OrderPlaced from "./OrderPlaced";

const StepTracker = () => {
  const [index, setIndex] = useState(0);
  const { data, loading, error } = useFetch(
    getAllProducts,
    getAllSavedAddresses
  );
  const [orderPlaced, setOrderPlaced] = useState("");

  const { state: { enableNext }, dispatch } = useGlobalContext();

  useEffect(() => {
    if (data?.products?.length && data?.address?.length) {
      dispatch({
        type: ACTIONS.SET_PRODUCTS,
        payload: data[FireStoreProductCollection],
      });
      dispatch({
        type: ACTIONS.SET_SAVED_ADDRESSES,
        payload: data[FireStoreAddressCollection],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.products?.length, data?.address?.length]);

  const onNextClick = () => {
    if (index < Steps.length - 1) {
      setIndex(index + 1);
      dispatch({ type: ACTIONS.DISABLE_NEXT, payload: null });
    }
  };

  const onPreviousClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const Steps = useMemo(() => {
    return STEPS({
      onCheckoutHandler: (orderPlacedMessage: string) =>
        setOrderPlaced(orderPlacedMessage),
    });
  }, []);

  const goToHomeHandler = () => {
    setIndex(0);
    setOrderPlaced("");
    dispatch({ type: ACTIONS.RESET_ALL_SELECTIONS, payload: null })
  }

  console.log('error', error);

  return (
    <>
      {<Loader loading={loading} />}
      {error && <Fallback error={error} />}
      {orderPlaced ? (
        <OrderPlaced goToHomeHandler={goToHomeHandler} />
      ) : (
        data && (
          <>
            <S.StepContainer>
              <S.ImgContainer hide={index === 0}>
                <S.Button data-automation-id="prev-step-btn" enabled={true} onClick={() => onPreviousClick()}>
                  Back
                </S.Button>
              </S.ImgContainer>
              <StepProgressBar index={index} Steps={Steps} />
              <S.ImgContainer hide={index === Steps.length - 1}>
                <S.Button data-automation-id="next-step-btn" disabled={!enableNext} enabled={enableNext} onClick={() => onNextClick()}>
                  Next
                </S.Button>
              </S.ImgContainer>
            </S.StepContainer>
            <S.StepComponent>
              {Steps[index].component()}
            </S.StepComponent>
          </>
        )
      )}
    </>
  );
};

export default StepTracker;