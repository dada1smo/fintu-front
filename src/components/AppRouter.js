import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import useUser from '../providers/user.provider';
import Details from './Details';
import Login from './Login';
import Months from './Months';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Register from './Register';

export default function AppRouter() {
  const { token } = useUser();

  return (
    <Routes>
      <Route element={<PublicRoute token={token} />}>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
      <Route element={<PrivateRoute token={token} />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Months />} />
          <Route path="/dashboard/details/:month" element={<Details />} />
        </Route>
      </Route>
    </Routes>
  );
}
