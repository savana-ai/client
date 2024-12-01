import React, { useState } from "react";

const ReadUpdateComponent = ({ dataItem, data, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localState, setLocalState] = useState(data);

  const handleChange = (name, value) => {
    setLocalState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(localState);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalState(data);
    setIsEditing(false);
  };

  return (
    <form
      onSubmit={handleSave}
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginTop: "1rem",
      }}
    >
      {dataItem.attributes.map((attr) => (
        <div key={attr.name} style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            name={attr.name}
            value={localState[attr.name] || ""}
            onChange={(e) => handleChange(attr.name, e.target.value)}
            readOnly={!isEditing}
            placeholder={isEditing ? `Enter ${attr.name}` : ""}
            style={{
              border: "none",
              borderBottom: isEditing
                ? localState[attr.name]
                  ? "1px solid #333"
                  : "1px dashed #aaa"
                : "none",
              backgroundColor: isEditing ? "#fff" : "transparent",
              padding: "0.5rem",
              fontSize: "1rem",
              outline: "none",
              width: "100%",
              cursor: isEditing ? "text" : "default",
              transition: "border-bottom 0.3s ease",
            }}
          />
        </div>
      ))}
      {isEditing ? (
        <div>
          <button type="submit" style={{ marginRight: "1rem" }}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
    </form>
  );
};

export default ReadUpdateComponent;
