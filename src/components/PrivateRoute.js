import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ token, redirectPath = '/', children }) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
