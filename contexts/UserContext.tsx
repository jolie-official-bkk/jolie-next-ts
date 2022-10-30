import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { IUser } from "../interfaces/user.interface";

interface Props {
  children: React.ReactNode;
}
interface IUserContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const UserContextState = {
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};

export const UserContext = createContext<IUserContext>(UserContextState);

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
