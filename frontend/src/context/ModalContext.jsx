"use client";
import { createContext, useState, useContext } from 'react';

const ModalContext = createContext({
  hasModalBeenShown: false,
  setHasModalBeenShown: () => {},
});

export const ModalProvider = ({ children }) => {
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);

  return (
    <ModalContext.Provider value={{ hasModalBeenShown, setHasModalBeenShown }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);