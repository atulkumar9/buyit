import { useEffect, useState } from "react";
import * as S from "../styles/products";
import { ACTIONS, ProductDto } from "../interfaces/store";
import { getSavingsPercentage } from "../utils";
import AddToBagButton from "./AddToBagButton";
import { useGlobalContext } from "../hooks/useGlobalContext";

const Products = () => {
  const { state: { products } } = useGlobalContext();
  return (
    <S.ProductsContainer>
      <ul>
        {products &&
          products.length &&
          products.map((product: any) => <Product key={product.id} info={product} />)}
      </ul>
    </S.ProductsContainer>
  );
};

interface ProductProps {
  info: ProductDto;
}

const Product = ({ info }: ProductProps) => {
  const [showCartIcon, setShowCartIcon] = useState(false);
  const { state, dispatch } = useGlobalContext();
  const [isSelected, setIsSelected] = useState<boolean>(() => state.selectedProducts.hasOwnProperty(info.id));

  const onProductToggle = () => {
    setIsSelected(!isSelected);
  }

  useEffect(() => {
    if (isSelected) {
      const payload = {
        id: info.id,
        totalQuantity: 1,
        finalPrice: Number(info.price) - Number(info.discount)
      }
      dispatch({ type: ACTIONS.ADD_PRODUCT_IN_BAG, payload });
    } else {
      dispatch({ type: ACTIONS.REMOVE_PRODUCT_FROM_BAG, payload: info.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected])

  return (
    <S.Product
      onMouseEnter={() => setShowCartIcon(true)}
      onMouseLeave={() => !isSelected && setShowCartIcon(false)}
      onClick={() => onProductToggle()}
      isselected={isSelected.toString()}
    >
      <img src={info.imageUrl} alt="" />
      {showCartIcon &&
        <AddToBagButton isSelected={isSelected} />
      }
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
              <S.Savings>
                Save:{" "}
                {getSavingsPercentage(
                  Number(info.price),
                  Number(info.discount)
                )}
                %
              </S.Savings>
            </S.DiscountContainer>
          ) : (
            <span>MRP: ₹{info.price}</span>
          )}
        </S.Price>
      </S.ItemDetail>
    </S.Product>
  );
};

export default Products;
