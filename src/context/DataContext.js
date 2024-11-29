import React, { createContext, useState, useContext } from "react";
import { productEntity, productData } from "../data/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataStore, setDataStore] = useState({
    product: { entity: productEntity, items: productData },
  });

  const updateItem = (entityName, updatedItem) => {
    setDataStore((prev) => {
      const updatedItems = prev[entityName].items.map((item) =>
        item.name === updatedItem.name ? updatedItem : item
      );
      return {
        ...prev,
        [entityName]: {
          ...prev[entityName],
          items: updatedItems,
        },
      };
    });
  };

  const addItem = (entityName, newItem) => {
    setDataStore((prev) => ({
      ...prev,
      [entityName]: {
        ...prev[entityName],
        items: [...prev[entityName].items, newItem],
      },
    }));
  };

  return (
    <DataContext.Provider value={{ dataStore, updateItem, addItem }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
