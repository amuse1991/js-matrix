import React, { createContext, useState, useContext } from "react";

const initialMatrix = { rowSize: 0, columnSize: 0 };
const MatrixStateContext = createContext(null);
const MatrixDispatchContext = createContext(null);

export const MatrixProvider = ({ children }) => {
  const [state, dispatch] = useState(initialMatrix);
  return (
    <MatrixStateContext.Provider value={state}>
      <MatrixDispatchContext.Provider value={dispatch}>
        {children}
      </MatrixDispatchContext.Provider>
    </MatrixStateContext.Provider>
  );
};

export function useMatrixState() {
  return useContext(MatrixStateContext);
}

export function useMatrixDispatch() {
  return useContext(MatrixDispatchContext);
}
