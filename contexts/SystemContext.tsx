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
  showOrderResponseModal: boolean;
  setShowOrderResponseModal: Dispatch<SetStateAction<boolean>>;
}

const SystemContextState = {
  showLoginModal: false,
  setShowLoginModal: () => {},
  showRegisterModal: false,
  setShowRegisterModal: () => {},
  showOrderResponseModal: false,
  setShowOrderResponseModal: () => {},
};

export const SystemContext = createContext<ISystemContext>(SystemContextState);

export const SystemContextProvider = ({ children }: Props) => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [showOrderResponseModal, setShowOrderResponseModal] =
    useState<boolean>(false);

  return (
    <SystemContext.Provider
      value={{
        showLoginModal,
        setShowLoginModal,
        showRegisterModal,
        setShowRegisterModal,
        showOrderResponseModal,
        setShowOrderResponseModal,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
