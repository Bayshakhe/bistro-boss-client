import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <p className="text-center text-3xl py-36">Loading...</p>
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
