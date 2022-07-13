import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  return props.hasUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
