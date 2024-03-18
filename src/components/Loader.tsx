import ReactDOM from "react-dom";
import * as S from "../styles/loader";
import { useEffect } from "react";

const Loader = ({ loading }: { loading: Boolean }) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  if (!loading) return null;

  return ReactDOM.createPortal(
    <S.LoaderOverlay>
      <S.LoaderTitle>please wait!</S.LoaderTitle>
      <S.LoaderSpinner />
    </S.LoaderOverlay>,
    document.body
  );
};

export default Loader;
