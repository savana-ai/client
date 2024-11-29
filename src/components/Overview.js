// Overview.js
import React from "react";
import { generateFields } from "../utils/utils";

const OverviewComponent = ({ dataItem, dataList, n }) => {
  return (
    <div className={`overview-${dataItem.name}`}>
      {dataList.map((data, index) => (
        <div key={index} className="overview-item">
          {generateFields(dataItem.attributes.slice(0, n), "read", data)}
        </div>
      ))}
    </div>
  );
};

export default OverviewComponent;
