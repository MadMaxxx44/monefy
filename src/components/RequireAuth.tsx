import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useMonefy } from "../context/MonefyContext";

const RequireAuth = () => {
  const { auth } = useMonefy();
  const location = useLocation();

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="signIn" state={{ from: location }} replace />
  );
};

export default RequireAuth;
