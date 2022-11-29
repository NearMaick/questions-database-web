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

// element={
//   isPrivate === !!educator ? (
//     <Component />
//   ) : (
//     <Navigate to={{ pathname: isPrivate ? "/" : "questions" }} />
//   )
// }

