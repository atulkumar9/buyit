import { useGlobalContext } from '../hooks/useGlobalContext';
import * as S from "../styles/products";
import Product from '../components/Products';

const ProductSelection = () => {
  const {
    state: { products },
  } = useGlobalContext();
  return (
    <S.ProductsContainer>
      {products && products.length ?
        <ul>
          {
            products.map((product: any) => (
              <Product key={product.id} info={product} />
            ))}
        </ul> : null
      }
    </S.ProductsContainer>
  );
};

export default ProductSelection
