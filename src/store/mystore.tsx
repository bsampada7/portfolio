import React, { createContext, ReactNode, useReducer } from "react";
import MyStoreReducer, { initialState } from "./mystorereducer";

export const MyStoreContext = createContext(initialState);

export const MyStoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(MyStoreReducer, initialState);

  return (
    <MyStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </MyStoreContext.Provider>
  );
};
