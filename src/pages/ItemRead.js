import React from "react";
import { useParams } from "react-router";
import { useDataContext } from "../context/DataContext";
import ReadUpdateComponent from "../components/ReadUpdate";

const ItemRead = () => {
  const { entityName, itemName } = useParams();
  const { dataStore, updateItem } = useDataContext();

  const itemData = dataStore[entityName].items.find(
    (item) => item.name === itemName
  );

  return (
    <div className="item-read-page">
      <h1>{itemName.toUpperCase()}</h1>
      <ReadUpdateComponent
        dataItem={dataStore[entityName].entity}
        data={itemData}
        onSave={(updatedItem) => updateItem(entityName, updatedItem)}
      />
    </div>
  );
};

export default ItemRead;
