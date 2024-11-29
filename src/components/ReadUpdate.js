// ReadUpdate.js
import React, { useState, useEffect } from "react";
import { generateFields } from "../utils/utils";

const ReadUpdateComponent = ({ dataItem, data, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localState, setLocalState] = useState(data);

  const handleSave = () => {
    onSave(localState);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalState(data);
    setIsEditing(false);
  };

  const fields = isEditing
    ? generateFields(dataItem.attributes, "write", localState)
    : generateFields(dataItem.attributes, "read", data);

  return (
    <div className={`read-update-${dataItem.name}`}>
      {fields}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {isEditing && <button onClick={handleSave}>Save</button>}
    </div>
  );
};

export default ReadUpdateComponent;
