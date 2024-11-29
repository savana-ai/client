// Create.js
import React, { useState } from "react";
import { generateFields } from "../utils/utils";

const CreateComponent = ({ dataItem, onSave }) => {
  const [visible, setVisible] = useState(false);
  const [localState, setLocalState] = useState({});

  const handleSave = () => {
    onSave(localState);
    setVisible(false);
  };

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Close Create" : "Open Create"}
      </button>
      {visible && (
        <div className={`create-${dataItem.name}`}>
          {generateFields(dataItem.attributes, "write", localState)}
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </>
  );
};

export default CreateComponent;
