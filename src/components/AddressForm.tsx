import React, { ChangeEvent, FormEvent, useMemo } from "react";
import { ACTIONS } from "../interfaces/store";
import { useGlobalContext } from "../hooks/useGlobalContext";
import * as S from "../styles/address";
import { REQUIRED_FIELD } from "../constants/appConstants";

interface Props {
  onSubmit: Function;
}

const AddressForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    state: { shippingAddress },
    dispatch,
  } = useGlobalContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    validateFields();
    const { name, value } = e.target;
    const payload = {
      ...shippingAddress,
      [name]: value,
    };
    dispatch({ type: ACTIONS.SET_FILLED_ADDRESS, payload });
  };

  const validateFields = () => {
    const newErrors = [];
    for (const key in shippingAddress) {
      if (!shippingAddress[key as keyof typeof shippingAddress] && key !== 'id' && key !== 'addressLine2') {
        newErrors.push(
          `${key.replace(/([A-Z])/g, " $1").toLowerCase()} ${REQUIRED_FIELD} `
        );
      }
    }
    if (newErrors.length > 0) {
      return { valid: false, error: newErrors };
    }
    return { valid: true, error: [] };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isFormValid = useMemo(() => validateFields(), [
    shippingAddress.addressLine1,
    shippingAddress.city,
    shippingAddress.country,
    shippingAddress.fullName,
    shippingAddress.state,
    shippingAddress.zipCode,
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid.valid) {
      return;
    }
    onSubmit();
  };

  return (
    <S.AddAddressForm onSubmit={handleSubmit}>
      <S.FormColumn>
        <label>
          <span>Full Name:</span>
          <input
            type="text"
            name="fullName"
            value={shippingAddress.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Address Line 1:</span>
          <input
            type="text"
            name="addressLine1"
            value={shippingAddress.addressLine1}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Address Line 2:</span>
          <input
            type="text"
            name="addressLine2"
            value={shippingAddress.addressLine2}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>City:</span>
          <input
            type="text"
            name="city"
            value={shippingAddress.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>State:</span>
          <input
            type="text"
            name="state"
            value={shippingAddress.state}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Zip Code:</span>
          <input
            type="text"
            name="zipCode"
            value={shippingAddress.zipCode}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Country:</span>
          <input
            type="text"
            name="country"
            value={shippingAddress.country}
            onChange={handleChange}
            required
          />
        </label>
      </S.FormColumn>
      <S.SaveAddressButton enabled={isFormValid.valid} type="submit">
        Save Address
      </S.SaveAddressButton>
    </S.AddAddressForm>
  );
};

export default AddressForm;
