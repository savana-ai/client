import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Dashboard from "./pages/Dashboard";
import EntityOverview from "./pages/EntityOverview";
import ItemRead from "./pages/ItemRead";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overview/:entityName" element={<EntityOverview />} />
          <Route path="/read/:entityName/:itemName" element={<ItemRead />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
