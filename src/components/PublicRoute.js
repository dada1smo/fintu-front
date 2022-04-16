import { Navigate, Outlet } from 'react-router';

const PublicRoute = ({ token, redirectPath = '/dashboard', children }) => {
  if (token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PublicRoute;
