import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Cart from "./pages/dashboard/Cart";
import FoodDetails from "./pages/dashboard/FoodDetails";
import Checkout from "./pages/dashboard/Checkout";
import Orders from "./pages/dashboard/Orders";
import Profile from "./pages/dashboard/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<NotFound />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path=":foodId" element={<FoodDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
