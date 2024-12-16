import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Replace this with your actual token storage logic

  return token ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
