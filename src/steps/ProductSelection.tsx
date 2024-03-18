import { useGlobalContext } from '../hooks/useGlobalContext';
import * as S from "../styles/products";
import Product from '../components/Products';

const ProductSelection = () => {
  const {
    state: { products },
  } = useGlobalContext();
  console.log("Product Selection!");
  return (
    <S.ProductsContainer>
      <ul>
        {products &&
          products.length &&
          products.map((product: any) => (
            <Product key={product.id} info={product} />
          ))}
      </ul>
    </S.ProductsContainer>
  );
};

export default ProductSelection
