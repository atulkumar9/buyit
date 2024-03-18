import { useEffect, useMemo, useState } from "react";
import * as S from "../styles/products";
import { ACTIONS, ProductDto } from "../interfaces/store";
import { getSavingsPercentage } from "../utils";
import AddToBagButton from "./AddToBagButton";
import { useGlobalContext } from "../hooks/useGlobalContext";

interface ProductProps {
  info: ProductDto;
}

const Product = ({ info }: ProductProps) => {
  const [showCartIcon, setShowCartIcon] = useState(false);
  const { state, dispatch } = useGlobalContext();
  const [isSelected, setIsSelected] = useState<boolean>(() =>
    state.selectedProducts.hasOwnProperty(info.id)
  );

  const onProductToggle = () => {
    setIsSelected(!isSelected);
  };

  const savingsPercentage = useMemo(
    () => getSavingsPercentage(Number(info.price), Number(info.discount)),
    [info.price, info.discount]
  );

  const finalPrice = useMemo(
    () => Number(info.price) - Number(info.discount),
    [info.price, info.discount]
  );

  useEffect(() => {
    if (isSelected) {
      const { id, name, imageUrl } = info;
      const payload = {
        id,
        totalQuantity: 1,
        finalPrice,
        savings: savingsPercentage,
        name,
        imageUrl,
      };
      setShowCartIcon(true);
      dispatch({ type: ACTIONS.ADD_PRODUCT_IN_BAG, payload });
    } else {
      dispatch({ type: ACTIONS.REMOVE_PRODUCT_FROM_BAG, payload: info.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  return (
    <S.Product
      data-automation-id={"product-card"}
      onMouseEnter={() => setShowCartIcon(true)}
      onMouseLeave={() => !isSelected && setShowCartIcon(false)}
      onClick={() => onProductToggle()}
      isselected={isSelected.toString()}
    >
      <img src={info.imageUrl} alt="" />
      {showCartIcon && <AddToBagButton isSelected={isSelected} />}
      <S.ItemDetail>
        <S.ProductName>{info.name}</S.ProductName>
        <S.Price>
          {Number(info.discount) ? (
            <S.DiscountContainer>
              <span>
                <span>MRP: </span>
                <S.PriceBeforeDiscount>₹{info.price}</S.PriceBeforeDiscount>
                <S.PriceAfterDiscount>
                  {" "}
                  ₹{Number(info.price) - Number(info.discount)}
                </S.PriceAfterDiscount>
              </span>
              <S.Savings>Save: %</S.Savings>
            </S.DiscountContainer>
          ) : (
            <span>MRP: ₹{info.price}</span>
          )}
        </S.Price>
      </S.ItemDetail>
    </S.Product>
  );
};

export default Product;
