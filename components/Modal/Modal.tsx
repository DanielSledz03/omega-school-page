import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? children : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')!,
    );
  } else {
    return null;
  }
};

export default Modal;
