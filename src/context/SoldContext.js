import React, { createContext, useReducer } from "react";
import { MANATIMEDATA } from "src/_mock/manatimeMock";

const initialState = {
  sold: MANATIMEDATA,
};

const actions = {
  setSold: (state, payload) => ({ ...state, sold: payload }),
};

const SoldContext = createContext(initialState);

const reducer = (state, { payload, type }) =>
  actions[type] ? actions[type](state, payload) : state;

const SoldContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SoldContext.Provider value={{ soldDispatch: dispatch, soldState: state }}>
      {children}
    </SoldContext.Provider>
  );
};

export { SoldContext, SoldContextProvider };
