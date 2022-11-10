import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
  } from "react";
  
  interface Props {
    children: React.ReactNode;
  }
  interface ISystemContext {
    showLoginModal: boolean;
    setShowLoginModal: Dispatch<SetStateAction<boolean>>;
    showRegisterModal: boolean;
    setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
  }
  
  const SystemContextState = {
    showLoginModal: false,
    setShowLoginModal: () => {},
    showRegisterModal: false,
    setShowRegisterModal: () => {},
  };
  
  export const SystemContext = createContext<ISystemContext>(SystemContextState);
  
  export const SystemContextProvider = ({ children }: Props) => {
    const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
    const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  
    return (
      <SystemContext.Provider
        value={{ showLoginModal, setShowLoginModal,showRegisterModal, setShowRegisterModal }}
      >
        {children}
      </SystemContext.Provider>
    );
  };
  