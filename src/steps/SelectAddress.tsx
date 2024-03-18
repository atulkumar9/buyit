import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import * as S from "../styles/address";
import { Error } from "../styles/common";
import AddressForm from "../components/AddressForm";
import { deleteAnAddress, postNewAddress } from "../api";
import { usePost } from "../hooks/useApi";
import Loader from "../components/Loader";
import SavedAddress from "../components/SavedAddress";
import {
  useAddAddressEffects,
  useDeleteAddressEffects,
} from "../hooks/useAddressEffects";
import { ACTIONS } from "../interfaces/store";

const SelectAddress = () => {
  const {
    state: { savedAddresses, selectedAddress, shippingAddress },
    dispatch,
  } = useGlobalContext();

  const [postErrorMessage, setPostErrorMessage] = useState<string | null>(null);
  const [addressToBeDeleted, setAddressToBeDeleted] = useState<string | null>(
    null
  );

  // On changing the address;
  const setSelectedAddress = (id: string) => {
    console.log(id);
    dispatch({
      type: ACTIONS.SET_SELECTED_ADDRESS,
      payload: id,
    });
  };

  // ADD Address API (not the API call)
  const addAddressResponse = usePost(postNewAddress);
  // ADD Address API data and error effects
  useAddAddressEffects({
    addAddressResponse,
    setPostErrorMessage,
    setSelectedAddress
  });
  // Make the API call to add a new address in DB i.e stored in the shippingAddress;
  const onAddNewAddressSubmit = async () => {
    await addAddressResponse.postData(shippingAddress);
  };

  // REMOVE ADDRESS API
  const deleteAddressResponse = usePost(deleteAnAddress);
  // REMOVE Address API data and error effects
  useDeleteAddressEffects({
    deleteAddressResponse,
    addressToBeDeleted,
    setAddressToBeDeleted,
    setPostErrorMessage,
    setSelectedAddress
  });
  // Make the API call to delete address with id from DB;
  const onDeleteAddress = async (id: string) => {
    setAddressToBeDeleted(id);
    await deleteAddressResponse.postData(id);
  };

  return (
    <>
      <Loader
        loading={addAddressResponse.loading || deleteAddressResponse.loading}
      />
      <S.SelectAddressContainer>
        {savedAddresses.length && (
          <S.SavedAddressContainer>
            <S.Title>Select An Address</S.Title>
            {savedAddresses.map((address) => {
              return (
                <SavedAddress
                  key={address.id}
                  address={address}
                  selectedAddress={selectedAddress}
                  setSelectedSavedAddress={setSelectedAddress}
                  onDeleteAddress={onDeleteAddress}
                />
              );
            })}
          </S.SavedAddressContainer>
        )}
        <S.AddNewAddressContainer>
          <S.Title>Add a new Address</S.Title>
          <AddressForm onSubmit={onAddNewAddressSubmit} />
          {postErrorMessage && <Error>{postErrorMessage}</Error>}
        </S.AddNewAddressContainer>
      </S.SelectAddressContainer>
    </>
  );
};

export default SelectAddress;
