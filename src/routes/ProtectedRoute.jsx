import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useUserContext();
  const location = useLocation();

  if (!currentUser) {
    const url = `/sign-in?redirectTo=${location.pathname}`;
    // user chưa đăng nhập => redirect về trang login
    return <Navigate to={url} replace />;
  }

  return children || Outlet;
}
