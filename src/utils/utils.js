// utils.js
export const generateFields = (attributes, mode = "read", data = {}) => {
  return attributes.map((attr) => {
    const value = data[attr.name] || "";
    const label = <label key={`label-${attr.name}`}>{attr.name}:</label>;

    if (mode === "read") {
      const content =
        attr.data_type === "list" ? (
          <ul key={`value-${attr.name}`}>
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={`value-${attr.name}`}>{value}</p>
        );
      return (
        <div key={attr.name}>
          {label}
          {content}
        </div>
      );
    } else {
      const inputType =
        attr.data_type === "int"
          ? "number"
          : attr.data_type === "bool"
          ? "checkbox"
          : attr.data_type === "datetime"
          ? "datetime-local"
          : attr.data_type === "email"
          ? "email"
          : attr.data_type === "password"
          ? "password"
          : "text";

      return (
        <div key={attr.name}>
          {label}
          <input
            type={inputType}
            name={attr.name}
            defaultValue={value}
            onChange={(e) => (data[attr.name] = e.target.value)}
          />
        </div>
      );
    }
  });
};
