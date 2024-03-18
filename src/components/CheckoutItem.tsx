import { useGlobalContext } from "../hooks/useGlobalContext";
import * as S from "../styles/checkout";
import RemoveIcon from "../assets/icons/remove-from-bag.svg";
import { ACTIONS } from "../interfaces/store";

interface CheckoutItemProps {
  id: string;
}

const CheckoutItem = ({ id }: CheckoutItemProps) => {
  const {
    state: { selectedProducts },
    dispatch,
  } = useGlobalContext();

  const removeFromBag = (id: string) => {
    dispatch({ type: ACTIONS.REMOVE_PRODUCT_FROM_BAG, payload: id });
  }

  return (
    <li key={id}>
      <S.ItemInfo>
        <S.Name>{selectedProducts[id].name}</S.Name>
        <S.Price>Price: ₹{selectedProducts[id].finalPrice}</S.Price>
        {selectedProducts[id].savings > 0 &&
          <S.Savings>Savings: {selectedProducts[id].savings}%</S.Savings>
        }
      </S.ItemInfo>
      <img
        src={selectedProducts[id].imageUrl}
        alt={selectedProducts[id].name}
      />
      <S.RemoveFromBag onClick={() => removeFromBag(id)}>
        <img src={RemoveIcon} alt={"remove icon from bag"} />
      </S.RemoveFromBag>
    </li>
  );
};

export default CheckoutItem;
