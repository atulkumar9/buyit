import React, { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import * as S from "../styles/address";
import { Address } from "../interfaces/store";
import { combineAddress } from "../utils";
import AddressForm from "../components/AddressForm";

const SelectAddress = () => {
  const {
    state: { savedAddresses, selectedAddress },
  } = useGlobalContext();

  const [selectedSavedAddress, setSelectedSavedAddress] = useState(selectedAddress || "");

  const onAddNewAddressSubmit = () => {

  }

  return (
    <S.SelectAddressContainer>
      {savedAddresses.length && (
        <>
          <S.Title>Select An Address</S.Title>
          <S.SavedAddressContainer>
            {savedAddresses.map((address) => {
              return (
                <SavedAddress
                  key={address.id}
                  address={address}
                  selectedSavedAddress={selectedSavedAddress}
                  setSelectedSavedAddress={setSelectedSavedAddress}
                />
              );
            })}
          </S.SavedAddressContainer>
        </>
      )}
      <S.Title>Add a new Address</S.Title>
      <AddressForm onSubmit={onAddNewAddressSubmit} />
    </S.SelectAddressContainer>
  );
};

interface SavedAddressProps {
  address: Address;
  selectedSavedAddress: string;
  setSelectedSavedAddress: Function;
}

const SavedAddress = ({
  address,
  selectedSavedAddress,
  setSelectedSavedAddress,
}: SavedAddressProps) => {
  return (
    <label>
      <input
        type="radio"
        value={address.id}
        checked={address.id === selectedSavedAddress}
        onChange={() => setSelectedSavedAddress(address.id)}
      />
      <S.Address>
        <S.Name>{address.fullName}</S.Name>
        <span>{combineAddress(address)}</span>
      </S.Address>
    </label>
  );
};

export default SelectAddress;
