import React from "react";

interface FallbackProps {
  error: String;
}

const Fallback = ({ error }: FallbackProps) => {
  return <div>{error}</div>;
};

export default Fallback;
