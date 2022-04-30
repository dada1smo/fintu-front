import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [showFirstSteps, setShowFirstSteps] = useState(false);

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
    setToken(localStorage.getItem('token'));
    if (localStorage.getItem('firstSteps') === null) {
      setShowFirstSteps(true);
    } else {
      setShowFirstSteps(false);
    }
  }, []);

  console.log(showFirstSteps);
  console.log(localStorage.getItem('firstSteps'));

  const login = async (data) => {
    try {
      const response = await api.post('/auth/login', data);

      localStorage.setItem('username', response.data.payload.username);
      localStorage.setItem('token', response.data.token);
      setUsername(response.data.payload.username);
      setToken(response.data.token);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken('');
    setUsername('');
  };

  const signup = async (data) => {
    try {
      const response = await api.post('/auth/signup', data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const handleFirstSteps = () => {
    localStorage.setItem('firstSteps', false);
    setShowFirstSteps(false);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        signup,
        username,
        token,
        handleFirstSteps,
        showFirstSteps,
        setShowFirstSteps,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  const context = useContext(UserContext);

  return context;
}
