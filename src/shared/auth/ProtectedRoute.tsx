import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/shared/auth/useAuth";

export function ProtectedRoute() {
  return useAuth().isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" />
  );
}

export function PublicRoute() {
  return useAuth().isAuthenticated ? <Navigate replace to="/" /> : <Outlet />;
}
