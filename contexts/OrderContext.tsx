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
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
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
  setOrderContext: () => {},
  currentStep: 1,
  setCurrentStep: () => {},
};

export const OrderContext = createContext<IOrderContext>(OrderContextState);

export const OrderContextProvider = ({ children }: Props) => {
  const [orderContext, setOrderContext] = useState<IOrder>(
    OrderContextState.orderContext
  );
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <OrderContext.Provider
      value={{
        orderContext,
        setOrderContext,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
