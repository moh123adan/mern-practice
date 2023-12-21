import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProductPage from "./components/ProductPage";
import DashboardPage from "./components/DashboardPage";
import { useSelector } from "react-redux";
import axios from "axios";

function App() {
  const state = useSelector((state) => state);
  // axios.baseURL = "http://localhost:5000";
  console.log(state);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
