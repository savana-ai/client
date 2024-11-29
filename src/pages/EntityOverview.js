import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import OverviewComponent from "../components/Overview";
import CreateComponent from "../components/Create";

const EntityOverview = () => {
  const { entityName } = useParams();
  const { dataStore, addItem } = useDataContext();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/read/${entityName}/${item.name}`);
  };

  return (
    <div className="entity-overview-page">
      <h1>{entityName.toUpperCase()}</h1>
      <CreateComponent
        dataItem={dataStore[entityName].entity}
        onSave={(item) => addItem(entityName, item)}
      />
      <div className="overview-grid">
        {dataStore[entityName].items.map((item) => (
          <div key={item.name} onClick={() => handleItemClick(item)}>
            <OverviewComponent
              dataItem={dataStore[entityName].entity}
              dataList={[item]}
              n={dataStore[entityName].entity.attributes.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntityOverview;
