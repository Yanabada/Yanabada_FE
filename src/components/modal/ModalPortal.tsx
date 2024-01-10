import { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const modalRootRef = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = modalRootRef.current;

    if (!modalRoot.parentElement) {
      document.body.appendChild(modalRoot);
    }

    return () => {
      if (modalRoot.parentElement) {
        document.body.removeChild(modalRoot);
      }
    };
  }, [modalRootRef]);

  return ReactDOM.createPortal(children, modalRootRef.current);
};

export default ModalPortal;
