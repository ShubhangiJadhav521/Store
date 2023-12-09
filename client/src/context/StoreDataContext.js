import React, { createContext, useState } from 'react';

export const StoreDataContext = createContext();

export const StoreDataProvider = ({ children }) => {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <StoreDataContext.Provider value={{ selectedStore, setSelectedStore }}>
      {children}
    </StoreDataContext.Provider>
  );
};
