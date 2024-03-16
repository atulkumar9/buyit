import React, { useEffect, useState } from "react";
import STEPS from "../constants/steps";
import StepProgressBar from "./StepProgressBar";
import * as S from "../styles/stepTracker";
import Next from "../assets/icons/next.svg";
import Prev from "../assets/icons/prev.svg";
import useFetch from "../hooks/useFetch";
import { getAllProducts, getAllSavedAddresses } from "../api";
import Fallback from "./Fallback";
import Loader from "./Loader";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ACTIONS } from "../interfaces/store";
import { FireStoreAddressCollection, FireStoreProductCollection } from "../firebase";

const StepTracker = () => {
  const [index, setIndex] = useState(0);
  const { data, loading, error } = useFetch(getAllProducts, getAllSavedAddresses);

  const { dispatch } = useGlobalContext();

  useEffect(() => {
    if (data) {
      dispatch({ type: ACTIONS.SET_PRODUCTS, payload: data[FireStoreProductCollection] });
      dispatch({ type: ACTIONS.SET_SAVED_ADDRESSES, payload: data[FireStoreAddressCollection] });
    }
  }, [data, dispatch]);

  const onNextClick = () => {
    if (index < STEPS.length - 1) {
      setIndex(index + 1);
    }
  };

  const onPreviousClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };


  return (
    <>
      {loading && <Loader />}
      {error && <Fallback error={error} />}
      {data &&
        <>
          <S.StepContainer>
            <S.ImgContainer hide={index === 0}>
              <img src={Prev} onClick={() => onPreviousClick()} alt="previous-btn" />
            </S.ImgContainer>
            <StepProgressBar index={index} />
            <S.ImgContainer hide={index === STEPS.length - 1}>
              <img src={Next} onClick={() => onNextClick()} alt="next-btn" />
            </S.ImgContainer>
          </S.StepContainer>
          {STEPS[index].component}
        </>
      }
    </>
  );
};

export default StepTracker;
