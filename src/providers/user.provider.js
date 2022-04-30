import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
    setToken(localStorage.getItem('token'));
    if (localStorage.getItem('onboarding') === null) {
      setShowOnboarding(true);
    } else {
      setShowOnboarding(false);
    }
  }, []);

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

  const handleOnboarding = () => {
    localStorage.setItem('onboarding', false);
    setShowOnboarding(false);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        signup,
        username,
        token,
        handleOnboarding,
        showOnboarding,
        setShowOnboarding,
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
