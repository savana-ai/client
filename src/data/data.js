// data.js
export const productEntity = {
  name: "product",
  attributes: [
    { name: "name", data_type: "str" },
    { name: "price", data_type: "int" },
    { name: "description", data_type: "str" },
    { name: "created_at", data_type: "datetime" },
  ],
};

export const productData = [
  {
    name: "Laptop",
    price: 1000,
    description: "A powerful laptop",
    created_at: "2024-11-28",
  },
  {
    name: "Tablet",
    price: 500,
    description: "A versatile tablet",
    created_at: "2024-11-27",
  },
];
