import React from "react";
import { useNavigate } from "react-router";
import { useDataContext } from "../context/DataContext";
import OverviewComponent from "../components/Overview";

const Dashboard = () => {
  const { dataStore } = useDataContext();
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {Object.keys(dataStore).map((entityName) => (
        <div key={entityName} className="entity-row">
          <h2 onClick={() => navigate(`/overview/${entityName}`)}>
            {entityName.toUpperCase()}
          </h2>
          <div className="entity-overview">
            <OverviewComponent
              dataItem={dataStore[entityName].entity}
              dataList={dataStore[entityName].items}
              n={3} // Display top 3 items
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
