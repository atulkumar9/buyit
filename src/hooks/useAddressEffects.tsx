import { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { ACTIONS } from "../interfaces/store";
import { ApiDto } from "../interfaces/api";
import { useGlobalContext } from "./useGlobalContext";

interface UseAddAddressEffectsProps {
  addAddressResponse: ApiDto;
  setPostErrorMessage: Dispatch<SetStateAction<string | null>>;
  setSelectedAddress: Function;
}

interface UseDeleteAddressEffectsProps {
  deleteAddressResponse: ApiDto;
  addressToBeDeleted: string | null;
  setAddressToBeDeleted: Dispatch<SetStateAction<string | null>>;
  setPostErrorMessage: Dispatch<SetStateAction<string | null>>;
  setSelectedAddress: Function;
}

interface UseApiErrorEffectProps {
  error: string;
  setPostErrorMessage: Dispatch<SetStateAction<string | null>>;
}

const useApiErrorEffect = ({
  error,
  setPostErrorMessage,
}: UseApiErrorEffectProps) => {
  useEffect(() => {
    let timeout: any = null;
    if (error) {
      setPostErrorMessage(error);
      timeout = setTimeout(() => {
        setPostErrorMessage(null);
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
};

export const useAddAddressEffects = ({
  addAddressResponse,
  setPostErrorMessage,
  setSelectedAddress
}: UseAddAddressEffectsProps) => {
  const {
    state: { savedAddresses, shippingAddress },
    dispatch,
  } = useGlobalContext();

  const { data, error } = addAddressResponse;

  useApiErrorEffect({
    error,
    setPostErrorMessage,
  });

  useEffect(() => {
    if (data?.success) {
      let id = uuidv4();
      setSelectedAddress(id);
      const newShippingAddress = { ...shippingAddress, id };
      const updatedSavedAddresses = [newShippingAddress, ...savedAddresses];
      dispatch({
        type: ACTIONS.SET_SAVED_ADDRESSES,
        payload: updatedSavedAddresses,
      });
      dispatch({ type: ACTIONS.SET_FILLED_ADDRESS, payload: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.success]);
};

export const useDeleteAddressEffects = ({
  deleteAddressResponse,
  addressToBeDeleted,
  setAddressToBeDeleted,
  setPostErrorMessage,
  setSelectedAddress
}: UseDeleteAddressEffectsProps) => {
  const {
    state: { savedAddresses, selectedAddress },
    dispatch,
  } = useGlobalContext();

  const { data, error } = deleteAddressResponse;

  useApiErrorEffect({
    error,
    setPostErrorMessage,
  });

  useEffect(() => {
    if (addressToBeDeleted && data?.success) {
      const payload = savedAddresses.filter(
        (address) => address.id !== addressToBeDeleted
      );
      dispatch({ type: ACTIONS.SET_SAVED_ADDRESSES, payload });
      if (addressToBeDeleted === selectedAddress) {
        setSelectedAddress("");
      }
      setAddressToBeDeleted("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.success]);
};
