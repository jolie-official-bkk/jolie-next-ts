import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { IOrder } from "../interfaces/order.interface";

interface Props {
  children: React.ReactNode;
}

interface IOrderContext {
  orderContext: IOrder;
  setOrderContext: Dispatch<SetStateAction<IOrder>>;
}

const OrderContextState = {
  orderContext: {
    user_id: 0,
    natural_hair_type: null,
    hair_structure: null,
    scalp_moisture: null,
    hair_treat: [],
    hair_goal: [],
    formula: [],
    color: null,
    scent: null,
    shampoo_name: null,
  },
  setOrderContext: () => { },
};

export const OrderContext = createContext<IOrderContext>(OrderContextState);

export const OrderContextProvider = ({ children }: Props) => {
  const [orderContext, setOrderContext] = useState<IOrder>(
    OrderContextState.orderContext
  );

  return (
    <OrderContext.Provider
      value={{
        orderContext,
        setOrderContext,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
