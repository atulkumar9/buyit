import SomethingWentWrongLogo from "../assets/icons/something-went-wrong.svg";
import { FallbackContainer } from "../styles/common";

interface FallbackProps {
  error: String;
}

const Fallback = ({ error }: FallbackProps) => {
  return (
    <FallbackContainer>
      <h1>Something Went Wrong</h1>
      <img src={SomethingWentWrongLogo} alt="something went wrong" />
      <p>ref: {error}</p>
    </FallbackContainer>
  );
};

export default Fallback;
