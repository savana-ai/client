import React from "react";

const OverviewComponent = ({ dataItem, dataList, n, onClick }) => {
  return (
    <div className="overview-container">
      {dataList.slice(0, n).map((item, index) => (
        <div
          key={index}
          className="overview-card"
          onClick={() => onClick && onClick(item)} // Direct onClick event
        >
          {dataItem.attributes.slice(0, n).map((attr, i) => (
            <div key={i} className="overview-field">
              <strong>{attr.name}:</strong> {item[attr.name]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OverviewComponent;
