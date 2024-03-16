import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

interface PortalProps {
  children: React.ReactPortal;
  className: string;
  el: string;
}

export const Portal = ({ children, className = 'root-portal', el = 'div' }: PortalProps) => {
  const [container] = useState(() => {
    return document.createElement(el);
  });

  useEffect(() => {
    container.classList.add(className)
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}