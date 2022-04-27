import { Route, Routes } from 'react-router-dom';
import Dashboard from '../layouts/Dashboard';
import Home from '../layouts/Home';
import useUser from '../providers/user.provider';
import MonthDetails from './MonthDetails';
import Login from './Login';
import Months from './Months';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Register from './Register';
import SavingsDetails from './SavingsDetails';
import CategoriesDetails from './CategoriesDetails';

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
          <Route path="/dashboard/details/:month" element={<MonthDetails />} />
          <Route path="/dashboard/savings" element={<SavingsDetails />} />
          <Route path="/dashboard/categories" element={<CategoriesDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}
