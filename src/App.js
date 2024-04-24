import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SavedPages from "./Components/SavedPages";
import Settings from "./Components/Settings";

function App() {
  return (
    <div>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" index='true' element={<Home />} /> 
        <Route path="/savedPages" element={<SavedPages />} /> 
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
