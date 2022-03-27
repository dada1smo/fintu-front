import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles.styles';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import Months from './components/Months';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Months />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
