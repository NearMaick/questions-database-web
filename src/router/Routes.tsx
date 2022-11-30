import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoutes() {
  const { educator } = useAuth();

  if (educator) {
    return <Outlet />;
  } else {
    return <Navigate to='/' />;
  }
}

export function PublicRoutes() {
  const { educator } = useAuth();

  if (educator) {
    return <Navigate to='/dashboard' />;
  } else {
    return <Outlet />;
  }
}

