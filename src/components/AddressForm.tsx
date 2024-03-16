import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Address } from "../interfaces/store"
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onSubmit: (formData: Address) => void;
}

const AddressForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Address>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    id: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formData.id = uuidv4();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address Line 1:
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address Line 2:
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;