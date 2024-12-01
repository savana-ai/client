import React, { useState } from "react";

const CreateComponent = ({ dataItem, onSave }) => {
  const [visible, setVisible] = useState(false);
  const [localState, setLocalState] = useState({});

  const handleChange = (name, value) => {
    setLocalState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(localState);
    setVisible(false);
  };

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Close Create" : "Open Create"}
      </button>
      {visible && (
        <form
          onSubmit={handleSubmit}
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
                type="text" //to be updated to match dtype representation
                name={attr.name}
                value={localState[attr.name] || ""}
                onChange={(e) => handleChange(attr.name, e.target.value)}
                placeholder={`Enter ${attr.name}`}
                style={{
                  border: "none",
                  borderBottom: localState[attr.name]
                    ? "1px solid #333"
                    : "1px dashed #aaa",
                  padding: "0.5rem",
                  fontSize: "1rem",
                  outline: "none",
                  width: "100%",
                  transition: "border-bottom 0.3s ease",
                }}
              />
            </div>
          ))}
          <button type="submit" style={{ marginTop: "1rem" }}>
            Save
          </button>
        </form>
      )}
    </>
  );
};

export default CreateComponent;
