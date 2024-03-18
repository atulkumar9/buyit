import { Address } from "../interfaces/store";
import { combineAddress } from "../utils";
import * as S from "../styles/address";
import RemoveIcon from "../assets/icons/remove-from-bag.svg";

interface SavedAddressProps {
  address: Address;
  selectedAddress: string;
  setSelectedSavedAddress: Function;
  onDeleteAddress: Function;
}

const SavedAddress = ({
  address,
  selectedAddress,
  setSelectedSavedAddress,
  onDeleteAddress
}: SavedAddressProps) => {

  return (
    <S.SavedAddress>
      <label>
        <input
          type="radio"
          value={address.id}
          checked={address.id === selectedAddress}
          onChange={() => setSelectedSavedAddress(address.id)}
        />
        <S.Address>
          <S.Name>{address.fullName}</S.Name>
          <span>{combineAddress(address)}</span>
        </S.Address>
      </label>
      <S.DeleteAddress onClick={(e) => onDeleteAddress(address.id)}>
        <img src={RemoveIcon} alt={"remove icon from bag"} />
      </S.DeleteAddress>
    </S.SavedAddress>
  );
};

export default SavedAddress;
