import { OrderPlacedContainer, GotoHomeButton } from "../styles/orderPlaced"
import Shoes from "../assets/icons/order-placed.svg";

const OrderPlaced = ({ goToHomeHandler }: { goToHomeHandler: Function }) => {
  return (
    <OrderPlacedContainer>
      <p>
        Order Placed Successfully!
      </p>
      <img src={Shoes} alt={"shoes"} />
      <GotoHomeButton onClick={() => goToHomeHandler()}>
        Go to Home
      </GotoHomeButton>
    </OrderPlacedContainer>
  )
};

export default OrderPlaced
